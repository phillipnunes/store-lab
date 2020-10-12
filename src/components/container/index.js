import React from 'react'
import { useSelector } from 'react-redux'
import Character from '../character'

export default function Container() {
  const characters = useSelector(state => state.characters)
  const isFetching = useSelector(state => state.api.isFetching)
  return (
    <div style={{
      display: `${isFetching ? 'none': 'block'}`
    }}>
      {characters.map(character => {
        const { name, thumbnail: { path, extension } } = character
        const imageUrl = `${path}.${extension}`

        return <Character key={name} name={name} imageUrl={imageUrl} />
      })}
    </div>
  )
}