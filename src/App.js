import React from 'react'
import Container from './components/container'
import CharactersProvider from './contexts/CharactersContext'

function App() {
  return (
    <div className="app">
      <CharactersProvider>
        <Container />
      </CharactersProvider>
    </div>
  );
}

export default App;
