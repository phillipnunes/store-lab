import React from 'react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import allReducers from './store/reducers'
import './Reset.css'

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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
