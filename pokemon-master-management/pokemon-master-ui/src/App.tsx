import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonSearch from './component/PokemonSearch';


function App() {
  return (
    <div className="App">
      <main>
        <PokemonSearch />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Pokémon Master UI</p>
      </footer>
    </div>
  );
}

export default App;
