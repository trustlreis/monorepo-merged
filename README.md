# Pokémon Master Management

![License](https://img.shields.io/github/license/trustlreis/pokemon-master-management)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16-brightgreen)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.7.0-brightgreen)
![Java](https://img.shields.io/badge/Java-17%2B-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-18.0+-61DAFB)

## Overview

**Pokémon Master Management** is a full-stack application designed to manage Pokémon Masters and their Pokémon decks. It is composed of three key components:

1. **Pokémon Master Server**: A RESTful API built with Spring Boot.
2. **Pokémon Master Client**: A reusable TypeScript API client.
3. **Pokémon Master UI**: A React-based frontend for interacting with the API.

This project demonstrates a complete stack for managing Pokémon data, combining a scalable backend API, a reusable API client, and an interactive user interface.


## Components

### Pokémon Master Server

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.7.0-brightgreen)
![Java](https://img.shields.io/badge/Java-17%2B-blue)

A backend API built with Spring Boot, providing endpoints for:
- Managing Pokémon Masters.
- Adding Pokémon to Masters' decks.
- Searching for Pokémon.

[**Read more about the Pokémon Master Server**](./pokemon-master-server/README.md)


### Pokémon Master Client

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

A reusable TypeScript client for interacting with the Pokémon Master Server. It provides strong typing and supports integration into JavaScript/TypeScript applications.

[**Read more about the Pokémon Master Client**](./pokemon-master-client/README.md)


### Pokémon Master UI

![React](https://img.shields.io/badge/React-18.0+-61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

A user-friendly frontend application built with React. It enables users to:
- View Pokémon Masters.
- Manage Pokémon decks for Masters.
- Search and view Pokémon information.

[**Read more about the Pokémon Master UI**](./pokemon-master-ui/README.md)


## Features

- **Full-stack Architecture**:
  - Spring Boot for the backend API.
  - TypeScript for the reusable API client.
  - React for the user interface.

- **Comprehensive Management**:
  - CRUD operations for Pokémon and Masters.
  - Search Pokémon by name.

- **OpenAPI Integration**:
  - Automatically generated API documentation for the backend.

- **Modern Development Practices**:
  - TypeScript for type safety.
  - Node.js for cross-platform development.
  - React for an intuitive user experience.


## Project Structure

```
pokemon-master-management/
├── pokemon-master-server/    # Backend API with Spring Boot
├── pokemon-master-client/    # Reusable TypeScript API client
├── pokemon-master-ui/        # Frontend application with React
├── README.md                 # Main project documentation
└── LICENSE                   # License file
```


## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Java**: `17` or later (for the server).
- **Maven**: `3.8.1` or later.
- **Node.js**: `16` or later (for the client and UI).
- **npm**: `7` or later.


### Setting up the Server

1. Navigate to the server directory:
   ```bash
   cd pokemon-master-server
   ```

2. Build and run the server:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

3. The server will be available at `http://localhost:8080`.


### Setting up the Client

1. Navigate to the client directory:
   ```bash
   cd pokemon-master-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the client:
   ```bash
   npm run build
   ```


### Setting up the UI

1. Navigate to the UI directory:
   ```bash
   cd pokemon-master-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Access the UI at:
   ```
   http://localhost:3000
   ```


## API Documentation

The server provides Swagger-based API documentation, accessible at:
```
http://localhost:8080/swagger-ui.html
```


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.


## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for details.
