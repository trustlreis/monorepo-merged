import fetch, { Headers } from "node-fetch"; // Import node-fetch and Headers

export interface ApiClientConfig {
  baseUrl: string; // Base URL for the API
  username: string; // Username for Basic Auth
  password: string; // Password for Basic Auth
}

export class ApiClient {
  private baseUrl: string; // Base URL of the API
  private authHeader: string; // Authorization header for HTTP Basic Auth

  constructor(config: ApiClientConfig) {
    this.baseUrl = config.baseUrl;
    this.authHeader = `Basic ${Buffer.from(
      `${config.username}:${config.password}`
    ).toString("base64")}`; // Encode username:password for Basic Auth
  }

  // Private helper method for making HTTP requests
  private async request<T>(
    method: string, // HTTP method (GET, POST, etc.)
    endpoint: string, // API endpoint path
    body?: any // Optional request body
  ): Promise<T> {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: this.authHeader, // Attach Authorization header
    });

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined, // Include body if provided
    });

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${response.statusText}`
      );
    }

    // Explicitly cast the JSON response to the expected type `T`
    const jsonResponse = (await response.json()) as T;
    return jsonResponse;
  }

  // Public API methods corresponding to the OpenAPI specification

  // GET /api/masters - Retrieve all masters
  public async getAllMasters(): Promise<any> {
    return this.request("GET", "/api/masters");
  }

  // POST /api/masters - Create a new master
  public async createMaster(data: any): Promise<any> {
    return this.request("POST", "/api/masters", data);
  }

  // POST /api/masters/{masterId}/deck - Add a Pokemon to a master's deck
  public async addPokemonToDeck(
    masterId: number,
    pokemonId: number
  ): Promise<any> {
    return this.request(
      "POST",
      `/api/masters/${masterId}/deck?pokemonId=${pokemonId}`
    );
  }

  // GET /api/pokemon - Retrieve all Pokemon
  public async getAllPokemon(): Promise<any[]> {
    return this.request("GET", "/api/pokemon");
  }

  // GET /api/pokemon/{id} - Retrieve Pokemon by ID
  public async getPokemonById(id: number): Promise<any> {
    return this.request("GET", `/api/pokemon/${id}`);
  }

  // GET /api/pokemon/search - Search Pokemon by name
  public async searchPokemon(name: string): Promise<any[]> {
    return this.request("GET", `/api/pokemon/search?name=${name}`);
  }
}

export default ApiClient;
