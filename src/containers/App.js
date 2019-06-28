import '../config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Config from 'react-native-config'
import { Sentry } from 'react-native-sentry'
import RootContainer from './RootContainer/RootContainer'
import createStore from '../redux'
import log from '../lib/utils'
// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

// Configure Sentry
// bools from .env configurations come through as strings

class App extends Component {
  componentWillMount() {
    if (
      Config.SENTRY_ENABLED === 'true' &&
      Config.SENTRY_ENVIRONMENT === 'production'
    ) {
      Sentry.config(Config.SENTRY_INSTALL_URL).install()
      Sentry.setTagsContext({
        environment: Config.SENTRY_ENVIRONMENT,
        react: true,
      })
    }
  }

  componentDidCatch(error, info) {
    log(error, info)
  }

  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
