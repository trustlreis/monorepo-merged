import ApiClient, { ApiClientConfig } from './pokemon-master-client.js';

// Load configuration from environment variables with defaults
const apiClientConfig: ApiClientConfig = {
  baseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api',
  username: process.env.REACT_APP_API_USERNAME || 'user',
  password: process.env.REACT_APP_API_PASSWORD || 'user',
};

// Initialize the API client with the config
const apiClient = new ApiClient(apiClientConfig);

// Example usage of the API client
(async () => {
  try {
    const masters = await apiClient.getAllMasters();
    console.log('Masters:', masters);

    const newMaster = await apiClient.createMaster({ name: 'Ash Ketchum' });
    console.log('New Master:', newMaster);

    // Fetch all Pokémon
    const pokemons = await apiClient.getAllPokemon();
    console.log('Pokémon:', pokemons);

    // Assign a Pokémon to a master
    const updatedMaster = await apiClient.assignPokemonToMaster(newMaster.id, 25);
    console.log('Updated Master:', updatedMaster);
  } catch (error) {
    console.error('API Error:', error);
  }
})();
