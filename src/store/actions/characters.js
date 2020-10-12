export const setCharacters = payload => {
  return {
    type: 'SET_CHARACTERS',
    payload
  }
}

export const getCharactersRequest = () => {
  return {
    type: 'GET_CHARACTERS_REQUEST'
  }
}
