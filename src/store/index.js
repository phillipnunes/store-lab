import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import allReducers from './reducers'

const middlewares = applyMiddleware(thunk, logger)
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
    middlewares,
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
    : middlewares,
);

export default store