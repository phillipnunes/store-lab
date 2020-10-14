import React, { useState, useEffect, createContext } from 'react'
import getCharacters from '../api/getCharacters'

export const CharactersContext = createContext()

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getCharacters()
      .then(response => {
        setCharacters(response)})
      .catch(err => console.error('Failed to save characters into the store', err))
      .finally(() => setIsLoading(false))
  }, [])

  const saveCharacter = character => {
    setCharacters([...characters, character])
  }

  return (
    <CharactersContext.Provider value={{ characters, saveCharacter, isLoading }}>
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersProvider