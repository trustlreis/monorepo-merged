# Pokémon Master Management

Welcome to the **Pokémon Master Management** repository! This monolithic repository hosts a comprehensive solution for managing Pokémon masters, their Pokémon decks, and related features. It includes backend services, a client library, and a user interface for seamless interaction.


## Repository Structure

- **[pokemon-master-server](pokemon-master-server/)**  
  The backend service handling core logic, data persistence, and integration with external Pokémon APIs like PokeAPI.

- **[pokemon-master-client](pokemon-master-client/)**  
  A client-side library providing high-level abstractions for interacting with the backend.

- **[pokemon-master-ui](pokemon-master-ui/)**  
  A responsive and user-friendly interface enabling users to manage Pokémon masters and their decks.


## Features

- **Dynamic Pokémon Data**: Integrates with PokeAPI to fetch Pokémon details.
- **User Management**: Secure authentication and user-specific data handling.
- **Deck Management**: Create and manage decks for Pokémon masters.
- **API Documentation**: Explore APIs via Swagger UI at `/swagger-ui.html`.


## Setup

### Prerequisites
- **Java**: 17+
- **Maven**: 3+
- **Node.js & npm/yarn**: For the UI component

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/trustlreis/pokemon-master-management.git
   cd pokemon-master-management
   ```

2. **Start the Backend**:
   ```bash
   cd pokemon-master-server
   mvn spring-boot:run
   ```

3. **Build the Client**:
   ```bash
   cd pokemon-master-client
   mvn clean install
   ```

4. **Start the UI**:
   ```bash
   cd pokemon-master-ui
   npm install
   npm start
   ```

5. Access the application:
   - **Backend APIs**: [http://localhost:8080](http://localhost:8080)
   - **Swagger UI**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
   - **Frontend**: [http://localhost:3000](http://localhost:3000)


## License

This project is licensed under the [MIT License](LICENSE.md).


## Contribution Guidelines

We welcome contributions! Submit issues or pull requests to the respective components. Follow the repository structure for consistency.

GitHub Repository: [Pokémon Master Management](https://github.com/trustlreis/pokemon-master-management)