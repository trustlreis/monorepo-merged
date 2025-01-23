# Pokémon Master Client

![License](https://img.shields.io/github/license/trustlreis/pokemon-master-management)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## Overview

**Pokémon Master Client** is a reusable TypeScript API client for interacting with the Pokémon Master Server. It provides a strongly typed interface for managing Pokémon Masters, their decks, and Pokémon data. This client is lightweight, easy to use, and can be integrated into any Node.js or TypeScript project.

## Features

- **TypeScript Integration**: Strongly typed API client for safer and more predictable development.
- **HTTP Basic Authentication**: Easily authenticate with the Pokémon Master Server.
- **RESTful API Support**: Works seamlessly with all endpoints provided by the Pokémon Master Server.
- **Reusable and Lightweight**: Built using `node-fetch` without unnecessary dependencies.


## File Structure

```
pokemon-master-client/
├── src/
│   ├── ApiClient.ts           # The main API client implementation
│   └── main.ts                # Example usage of the API client
├── dist/                      # Compiled JavaScript files
├── package.json               # Project metadata and dependencies
├── tsconfig.json              # TypeScript configuration
├── .gitignore                 # Ignored files and directories
└── README.md                  # Documentation for the Pokémon Master Client
```


## Prerequisites

Ensure you have the following installed:
- **Node.js**: `16` or later.
- **npm**: `7` or later.


## Building the Client

Install dependencies:
```bash
npm install
```

Compile the TypeScript code into JavaScript:
```bash
npm run build
```

The compiled files will be placed in the `dist/` directory.


## Usage

### Example: Using the API Client

Here's an example of how to use the Pokémon Master Client in a Node.js project:

```typescript
import ApiClient from "./src/ApiClient";

const apiClient = new ApiClient({
  baseUrl: "http://localhost:8080", // Replace with your server URL
  username: "your-username",       // Replace with your username
  password: "your-password",       // Replace with your password
});

(async () => {
  try {
    const masters = await apiClient.getAllMasters();
    console.log("Masters:", masters);

    const pokemons = await apiClient.getAllPokemon();
    console.log("Pokemons:", pokemons);

    const searchedPokemon = await apiClient.searchPokemon("Pikachu");
    console.log("Search Results:", searchedPokemon);
  } catch (error) {
    console.error("Error:", error);
  }
})();
```

Run the example script:
```bash
node dist/main.js
```


## API Client Features

### Configuration

The `ApiClient` class requires a configuration object with the following properties:

- `baseUrl`: The base URL of the Pokémon Master Server (e.g., `http://localhost:8080`).
- `username`: Your username for HTTP Basic Authentication.
- `password`: Your password for HTTP Basic Authentication.

### Methods

The `ApiClient` provides the following methods:

| Method                      | Description                                   |
|-----------------------------|-----------------------------------------------|
| `getAllMasters()`           | Fetches all Pokémon Masters.                 |
| `createMaster(data)`        | Creates a new Pokémon Master.                |
| `addPokemonToDeck(masterId, pokemonId)` | Adds a Pokémon to a Master's deck. |
| `getAllPokemon()`           | Fetches all Pokémon.                         |
| `getPokemonById(id)`        | Fetches a Pokémon by ID.                     |
| `searchPokemon(name)`       | Searches for Pokémon by name.                |


## Publishing

To publish the client to an npm registry:

1. Build the project:
   ```bash
   npm run build
   ```

2. Authenticate with your npm registry:
   ```bash
   npm login
   ```

3. Publish the package:
   ```bash
   npm publish
   ```


## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.
