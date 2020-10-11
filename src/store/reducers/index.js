import { combineReducers } from 'redux'
import charactersReducer from './characters.js'

const allReducers = combineReducers({
  characters: charactersReducer
})

export default allReducers

