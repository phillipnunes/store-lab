import { all } from 'redux-saga/effects'
import charactersSagas from './characters'

function* sagas() {
  yield all([charactersSagas])
}

export { sagas }