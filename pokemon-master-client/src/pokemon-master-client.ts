import ky, { KyInstance } from 'ky';

/**
 * Configuration interface for the API client.
 */
export interface ApiClientConfig {
  baseUrl: string;
  username: string;
  password: string;
}

/**
 * API Client class for interacting with the backend.
 */
class ApiClient {
  private api: KyInstance;

  constructor(config: ApiClientConfig) {
    const { baseUrl, username, password } = config;

    // Helper to create Basic Authentication header
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

    // Initialize the Ky instance with the provided config
    this.api = ky.create({
      prefixUrl: baseUrl,
      timeout: 10000, // Set timeout in milliseconds
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
    });
  }

  /**
   * Fetch all Pokémon masters.
   */
  async getAllMasters(): Promise<any> {
    return this.api.get('masters').json();
  }

  /**
   * Create a new Pokémon master.
   */
  async createMaster(masterData: Record<string, any>): Promise<any> {
    return this.api.post('masters', { json: masterData }).json();
  }

  /**
   * Fetch all Pokémon.
   */
  async getAllPokemon(): Promise<any> {
    return this.api.get('pokemon').json();
  }

  /**
   * Create a new Pokémon.
   */
  async createPokemon(pokemonData: Record<string, any>): Promise<any> {
    return this.api.post('pokemon', { json: pokemonData }).json();
  }

  /**
   * Update an existing Pokémon.
   */
  async updatePokemon(id: string, updatedData: Record<string, any>): Promise<any> {
    return this.api.put(`pokemon/${id}`, { json: updatedData }).json();
  }

  /**
   * Delete a Pokémon by ID.
   */
  async deletePokemon(id: string): Promise<void> {
    await this.api.delete(`pokemon/${id}`);
  }

  /**
   * Fetch all Pokémon masters along with their assigned Pokémon.
   */
  async getAllPokemonMasters(): Promise<any> {
    return this.api.get('pokemon-masters').json();
  }

  /**
   * Assign a Pokémon to a master.
   */
  async assignPokemonToMaster(masterId: string, pokemonId: number): Promise<any> {
    return this.api.post(`masters/${masterId}/deck?pokemonId=${pokemonId}`).json();
  }

  /**
   * Unassign a Pokémon from a master.
   */
  async unassignPokemonFromMaster(masterId: string, pokemonId: number): Promise<any> {
    return this.api.delete(`masters/${masterId}/deck?pokemonId=${pokemonId}`).json();
  }
}

export default ApiClient;
