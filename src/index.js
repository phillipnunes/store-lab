import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import allReducers from './store/reducers'
import './Reset.css'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
    : applyMiddleware(logger),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
