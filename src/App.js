import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCharacters from './api/getCharacters'
import Container from './components/container'
import setCharacters from './store/actions/setCharacters'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getCharacters().then(response => {
      dispatch(setCharacters(response))
    }).catch(err => console.error('Failed to save characters into the store', err))
  }, [dispatch])

  return (
    <div className="app">
      <Container />
    </div>
  );
}

export default App;
