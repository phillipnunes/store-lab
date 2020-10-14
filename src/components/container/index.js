import React, { useContext } from 'react'
import Character from '../character'
import { CharactersContext } from '../../contexts/CharactersContext'

export default function Container() {
  const context = useContext(CharactersContext)
  const { characters, isLoading } = context

  return (
    <div style={{
      display: `${isLoading ? 'none': 'block'}`
    }}>
      {characters && characters.map(character => {
        const { name, thumbnail: { path, extension } } = character
        const imageUrl = `${path}.${extension}`

        return <Character key={name} name={name} imageUrl={imageUrl} />
      })}
    </div>
  )
}