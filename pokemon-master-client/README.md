# Pokémon Master Management

![License](https://img.shields.io/github/license/trustlreis/pokemon-master-management)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## Overview

**Pokémon Master Management** is a TypeScript-based API client and application designed to manage Pokémon Masters and their decks. Built with Node.js and TypeScript, this project provides seamless integration with a backend API for managing Pokémon and Masters.

## Features

- **API Client**:
  - Retrieve all Pokémon Masters.
  - Create a new Pokémon Master.
  - Manage Pokémon decks for Masters.
  - Search Pokémon by name.
  - Fetch detailed Pokémon information.

- **TypeScript**:
  - Strongly typed API client for better development experience.
  - Fully compatible with modern JavaScript and Node.js.

- **GitHub Packages**:
  - Published to GitHub Packages for easy reuse in other projects.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v16` or later
- **npm**: `v7` or later
- **TypeScript**: Installed as a dev dependency

### Installation

Clone the repository:
```bash
git clone https://github.com/trustlreis/pokemon-master-management.git
cd pokemon-master-management
```

Install dependencies:
```bash
npm install
```

### Build

To compile TypeScript files into JavaScript:
```bash
npm run build
```

### Run

Run the application:
```bash
npm start
```

### Testing the API Client

Use the `main.ts` script to test the API client functionality:
```bash
node dist/main.js
```

## API Client Usage

The API client is located in the `pokemon-master-client` folder. Below is an example of how to use it:

```typescript
import ApiClient from "./pokemon-master-client";

const apiClient = new ApiClient({
  baseUrl: "http://localhost:8080", // Replace with your API base URL
  username: "your-username",
  password: "your-password",
});

(async () => {
  try {
    const masters = await apiClient.getAllMasters();
    console.log("Masters:", masters);

    const pokemons = await apiClient.getAllPokemon();
    console.log("Pokemons:", pokemons);
  } catch (error) {
    console.error("Error:", error);
  }
})();
```

## Project Structure

```
pokemon-master-management/
├── src/
│   ├── pokemon-master-client/   # TypeScript API client
│   ├── main.ts                  # Example usage script
├── dist/                        # Compiled JavaScript files
├── package.json                 # Project metadata and dependencies
├── tsconfig.json                # TypeScript configuration
├── README.md                    # Project documentation
```

## Publishing to GitHub Packages

The API client is designed to be reusable and published to GitHub Packages. To publish:

1. Build the project:
   ```bash
   npm run build
   ```

2. Publish the package:
   ```bash
   npm publish
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE.md) file for details.

## Acknowledgments

- **Pokémon Franchise**: For inspiring this project.
- **Node.js**: For powering the backend and API client.
- **TypeScript**: For making development seamless and type-safe.
