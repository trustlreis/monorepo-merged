# Pokémon Master Server

![License](https://img.shields.io/github/license/trustlreis/pokemon-master-management)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.7.0-brightgreen)
![Java](https://img.shields.io/badge/Java-11-blue)
![Maven](https://img.shields.io/badge/Maven-3.8.1-orange)

## Overview

**Pokémon Master Server** is a RESTful API server built with Spring Boot to manage Pokémon Masters and their decks. It provides endpoints for CRUD operations on Pokémon and Masters, supporting seamless integration with the Pokémon Master Client.

## Features

- **RESTful API**:
  - Manage Pokémon Masters and their Pokémon decks.
  - Search Pokémon by name.
  - Add Pokémon to a Master’s deck.

- **Spring Boot**:
  - Fast and scalable backend framework.
  - Integrated testing and dependency management.

- **OpenAPI/Swagger**:
  - Auto-generated API documentation for easy development.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Java**: `11` or later
- **Maven**: `3.8.1` or later

### Installation

Clone the repository:
```bash
git clone https://github.com/trustlreis/pokemon-master-management.git
cd pokemon-master-management/pokemon-master-server
```

### Configuration

Update the application properties in `src/main/resources/application.properties`:
```properties
server.port=8080
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=your-username
spring.datasource.password=your-password
```

### Build

Build the project using Maven:
```bash
mvn clean install
```

### Run

Start the server:
```bash
mvn spring-boot:run
```

The server will be available at `http://localhost:8080`.

## API Documentation

Access the API documentation via Swagger UI:
```
http://localhost:8080/swagger-ui.html
```

## Endpoints Overview

### Pokémon Management

| HTTP Method | Endpoint                   | Description                     |
|-------------|----------------------------|---------------------------------|
| `GET`       | `/api/pokemon`             | Get all Pokémon                 |
| `GET`       | `/api/pokemon/{id}`        | Get Pokémon by ID               |
| `GET`       | `/api/pokemon/search?name` | Search Pokémon by name          |

### Master Management

| HTTP Method | Endpoint                       | Description                       |
|-------------|--------------------------------|-----------------------------------|
| `GET`       | `/api/masters`                | Get all Masters                  |
| `POST`      | `/api/masters`                | Create a new Master              |
| `POST`      | `/api/masters/{masterId}/deck`| Add Pokémon to a Master's deck   |

## Testing

Run unit tests:
```bash
mvn test
```

## Project Structure

```
pokemon-master-server/
├── src/
│   ├── main/
│   │   ├── java/                  # Java source files
│   │   ├── resources/             # Application resources
│   ├── test/                      # Unit tests
├── target/                        # Build output
├── pom.xml                        # Maven configuration
├── README.md                      # Project documentation
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

- **Spring Boot**: For powering the backend framework.
- **H2 Database**: For an in-memory database during development.
- **Swagger**: For simplifying API documentation.
