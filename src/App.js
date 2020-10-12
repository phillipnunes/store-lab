import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Container from './components/container'
import { getCharactersRequest } from './store/actions/characters'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCharactersRequest())
  }, [dispatch])

  return (
    <div className="app">
      <Container />
    </div>
  );
}

export default App;
