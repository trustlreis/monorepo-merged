import ky, { KyInstance } from 'ky';

// Helper function to generate a Basic Authentication header
const createAuthHeader = (username: string, password: string): string => {
  const credentials = `${username}:${password}`;
  return `Basic ${btoa(credentials)}`; // `btoa` encodes the credentials in Base64
};

// Create a Ky instance with HTTP Basic Authentication
const api: KyInstance = ky.create({
  prefixUrl: process.env.API_BASEURL || 'http://localhost:8080/api', 
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    Authorization: createAuthHeader(process.env.API_USERNAME || 'user', process.env.API_PASSWORD || 'user'), 
  },
});

/**
 * Interface defining the client for interacting with the API.
 */
interface ApiClient {
  getAllMasters: () => Promise<any>;
  createMaster: (masterData: Record<string, any>) => Promise<any>;
  getAllPokemon: () => Promise<any>;
  createPokemon: (pokemonData: Record<string, any>) => Promise<any>;
  updatePokemon: (id: string, updatedData: Record<string, any>) => Promise<any>;
  deletePokemon: (id: string) => Promise<void>;
  getAllPokemonMasters: () => Promise<any>;
  assignPokemonToMaster: (masterId: string, pokemonId: number) => Promise<any>;
  unassignPokemonFromMaster: (masterId: string, pokemonId: number) => Promise<any>;
}

/**
 * Implementation of the API Client using Ky.
 */
const ApiClient: ApiClient = {
  async getAllMasters(): Promise<any> {
    return api.get('masters').json();
  },

  async createMaster(masterData: Record<string, any>): Promise<any> {
    return api.post('masters', { json: masterData }).json();
  },

  async getAllPokemon(): Promise<any> {
    return api.get('pokemon').json();
  },

  async createPokemon(pokemonData: Record<string, any>): Promise<any> {
    return api.post('pokemon', { json: pokemonData }).json();
  },

  async updatePokemon(id: string, updatedData: Record<string, any>): Promise<any> {
    return api.put(`pokemon/${id}`, { json: updatedData }).json();
  },

  async deletePokemon(id: string): Promise<void> {
    await api.delete(`pokemon/${id}`);
  },

  async getAllPokemonMasters(): Promise<any> {
    return api.get('pokemon-masters').json();
  },

  async assignPokemonToMaster(masterId: string, pokemonId: number): Promise<any> {
    return api.post(`masters/${masterId}/deck?pokemonId=${pokemonId}`).json();
  },

  async unassignPokemonFromMaster(masterId: string, pokemonId: number): Promise<any> {
    return api.delete(`masters/${masterId}/deck?pokemonId=${pokemonId}`).json();
  },
};

// Export the ApiClient as the default export
export default ApiClient;
