# Pokémon Master Monolith Repository

This monolithic repository is an all-in-one solution for managing Pokémon masters and their Pokémon decks. It includes backend services, client logic, and a user interface for seamless interaction. Each component plays a crucial role in the system's functionality.


## Components

### 1. **pokemon-master-server**
   - **Description**:  
     The backend service responsible for handling core business logic, data persistence, and integration with external APIs like PokeAPI.
   - **Key Features**:
     - RESTful API endpoints for managing Pokémon masters and decks.
     - Integration with PokeAPI for fetching Pokémon data dynamically.
     - Secure user management and authentication.
     - Database connectivity using JPA and Hibernate.
   - **Tech Stack**:
     - Java 17
     - Spring Boot
     - H2 (in-memory) or other databases
   - **Endpoints**:
     - `GET /api/masters`: List all masters.
     - `POST /api/masters`: Create a new master.
     - `POST /api/masters/{masterId}/deck`: Add Pokémon to a master's deck.
     - `GET /api/catalog`: Fetch Pokémon data from PokeAPI.


### 2. **pokemon-master-client**
   - **Description**:  
     The intermediary service or SDK that interacts with the backend APIs, handling client-side business logic and streamlining API calls for the UI.
   - **Key Features**:
     - Encapsulates API requests for seamless integration with the UI.
     - Validates client-side data before passing it to the server.
     - Simplifies interaction with the backend by providing high-level abstractions.


### 3. **pokemon-master-ui**
   - **Description**:  
     The front-end user interface designed for Pokémon enthusiasts to interact with the system effortlessly.
   - **Key Features**:
     - Responsive design for smooth user experience across devices.
     - Features for creating masters, managing decks, and browsing Pokémon.
     - Easy-to-use interface powered by modern frontend frameworks.
   - **Tech Stack**:
     - Framework: React/Angular/Vue (to be finalized)
     - Integration with `pokemon-master-client` for data handling.
     - User-friendly design with focus on accessibility.


## How to Get Started

1. **Prerequisites**:
   - Java 17
   - Maven 3+
   - Node.js and npm/yarn (for UI component)

2. **Setup**:
   - Clone the repository:  
     ```bash
     git clone <repository-url>
     cd pokemon-master-monolith
     ```
   - Start the server:  
     ```bash
     cd pokemon-master-server
     mvn spring-boot:run
     ```
   - Build and run the client:  
     ```bash
     cd pokemon-master-client
     mvn clean install
     ```
   - Start the UI:  
     ```bash
     cd pokemon-master-ui
     npm install
     npm start
     ```

3. **Access the System**:
   - Backend APIs: [http://localhost:8080](http://localhost:8080)
   - Swagger UI: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
   - Frontend: [http://localhost:3000](http://localhost:3000)


## License

This project is licensed under the [MIT License](LICENSE.md). 


## Contribution Guidelines

We welcome contributions! Please submit issues and pull requests in the relevant components' directories.