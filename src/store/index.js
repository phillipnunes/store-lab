import createSaga from 'redux-saga'
import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import allReducers from './reducers'
import { sagas } from './sagas'

const sagaMiddleware = createSaga()
const middlewares = applyMiddleware(sagaMiddleware, logger)
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
    middlewares,
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
    : middlewares,
);

sagaMiddleware.run(sagas)

export default store