import React, { useEffect } from 'react'
import Character from './Character'
import { getCharacters } from './api.js'

function App() {
  useEffect(() => {
    async function get(){
      const response = await getCharacters();
      console.log(response);
    }

    get()
  }, [])
  return (
    <div className="app">
      <Character />
      <Character />
      <Character />
    </div>
  );
}

export default App;
