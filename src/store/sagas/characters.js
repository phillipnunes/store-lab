import { all, call, put, takeLatest } from 'redux-saga/effects'
import getCharacters from '../../api/getCharacters'
import { setCharacters } from '../actions/characters'
import { fetchInit, fetchFail, fetchFinished } from '../actions/api'

function* getAll() {
  try {
    yield put(fetchInit())
    const data = yield call(getCharacters)
    yield put(setCharacters(data))
  } catch (e) {
    yield put(fetchFail(e))
  } finally {
    yield put(fetchFinished())
  }
}

export default all([takeLatest('GET_CHARACTERS_REQUEST', getAll)])
