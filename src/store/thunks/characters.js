import getCharactersApi from '../../api/getCharacters'
import { setCharacters } from '../actions/characters'
import { fetchInit, fetchFail, fetchFinished } from '../actions/api'

const charactersThunks = {
  getCharacters: () => dispatch => {
    getCharactersApi()
      .then(characters => {
        dispatch(fetchInit())
        dispatch(setCharacters(characters))
      })
      .catch(error => {
        dispatch(fetchFail(error))
      })
      .finally(() => {
        dispatch(fetchFinished())
      })
  }
}

export { charactersThunks }