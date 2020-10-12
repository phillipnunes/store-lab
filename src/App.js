import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Container from './components/container'
import { charactersThunks } from './store/thunks/characters'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(charactersThunks.getCharacters())
  }, [dispatch])

  return (
    <div className="app">
      <Container />
    </div>
  );
}

export default App;
