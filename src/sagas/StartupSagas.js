import { put, select } from 'redux-saga/effects'
import { is } from 'ramda'
import GithubActions, { GithubSelectors } from '../redux/GithubRedux'

// exported to make available for tests
export const { selectAvatar } = GithubSelectors

// process STARTUP actions
// eslint-disable-next-line no-unused-vars
export function* startup(action) {
  const avatar = yield select(selectAvatar)
  // only get if we don't have it yet
  if (!is(String, avatar)) {
    yield put(GithubActions.userRequest('GantMan'))
  }
}
