import React, { useState } from 'react';
import ApiClient, { ApiClientConfig } from '@trustlreis/pokemon-master-client';

// Load configuration from environment variables with defaults
const apiClientConfig: ApiClientConfig = {
  baseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api',
  username: process.env.REACT_APP_API_USERNAME || 'user',
  password: process.env.REACT_APP_API_PASSWORD || 'user',
};

// Initialize the API client with the config
const apiClient = new ApiClient(apiClientConfig);

const PokemonSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pokemonResults, setPokemonResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const results = await apiClient.searchPokemonByName(searchTerm.toLowerCase());
      setPokemonResults(results);
      setError(null);
    } catch (err) {
      console.error('Error searching Pokémon:', err);
      setError('Failed to fetch Pokémon. Please try again.');
      setPokemonResults([]);
    }
  };

  return (
    <div className="pokemon-search">
      <h1>Pokémon Master UI</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Pokémon name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pokemonResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {pokemonResults.map((pokemon) => (
              <li key={pokemon.id}>
                <h3>{pokemon.name}</h3>
                {pokemon.sprites?.front_default && (
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
