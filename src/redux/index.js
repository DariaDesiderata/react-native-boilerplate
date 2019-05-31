import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas'
import ReduxPersist from '../config/ReduxPersist'
import { reducer as GithubReducer } from './GithubRedux'
import { reducer as SearchReducer } from './SearchRedux'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  github: GithubReducer,
  search: SearchReducer,
})

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  // eslint-disable-next-line prefer-const
  let { store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga,
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = reducers
      store.replaceReducer(nextRootReducer)

      // eslint-disable-next-line global-require
      const newYieldedSagas = require('../sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
