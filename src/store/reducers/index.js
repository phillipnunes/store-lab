import { combineReducers } from 'redux'
import charactersReducers from './characters'
import apiReducers from './api'

const allReducers = combineReducers({
  characters: charactersReducers,
  api: apiReducers
})

export default allReducers

