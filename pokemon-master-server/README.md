# Pokemon Master Server

The **Pokemon Master Server** is a Java-based Spring Boot application designed for managing Pokemon Masters and their Pokemon decks, leveraging data from the PokeAPI.


## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [File Structure](#file-structure)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)
- [API Documentation](#api-documentation)
- [Postman Collection](#postman-collection)
- [Development](#development)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)


## Features

- Manage Pokemon Masters and their Pokemon decks.
- Fetch Pokemon details from [PokeAPI](https://pokeapi.co).
- REST API with endpoints for CRUD operations.
- Swagger-UI for interactive API documentation.
- H2 Console for local database management.
- Secure authentication for user management.


## Setup

### Prerequisites
1. Install [Java 17+](https://adoptopenjdk.net/).
2. Install [Maven 3+](https://maven.apache.org/).

### Build and Run
1. Build the application:
   ```bash
   mvn clean install
   ```
2. Run the server:
   ```bash
   mvn spring-boot:run
   ```

3. Access the application:
   - API Base URL: `http://localhost:8080/api`
   - Swagger-UI: `http://localhost:8080/swagger-ui.html`
   - H2 Console: `http://localhost:8080/h2-console`


## File Structure

Here is the high-level structure of the project:

```plaintext
src/
├── main/
│   ├── java/com/trustly/labs/pokemon/master/server/
│   │   ├── config/          # Security and application configurations
│   │   ├── controller/      # REST controllers for API endpoints
│   │   ├── entity/          # JPA entities representing database tables
│   │   ├── repository/      # Spring Data JPA repositories
│   │   ├── service/         # Business logic and service layer
│   ├── resources/
│       ├── application.yml  # Application configurations (profiles, database, etc.)
│   └── test/
│       ├── resources/
│           ├── collection.json  # Postman collection for testing the API
```


## Environment Variables

To configure users and secure properties, you can set the following environment variables:

| Variable           | Default Value | Description                              |
|--------------------|---------------|------------------------------------------|
| `APP_ADMIN_PASS`   | `admin123`    | Admin user's password                    |
| `APP_USER_PASS`    | `user123`     | Regular user's password                  |

For development, you can also use a `.env` file:
```env
APP_ADMIN_PASS=your_admin_password
APP_USER_PASS=your_user_password
```


## Endpoints

### Master Management
| Method | Endpoint                     | Description                            |
|--------|-------------------------------|----------------------------------------|
| GET    | `/api/masters`               | List all Pokemon Masters              |
| POST   | `/api/masters`               | Create a new Pokemon Master           |
| POST   | `/api/masters/{id}/deck`     | Add a Pokemon to a Master's deck      |

### Pokemon Catalog
| Method | Endpoint                     | Description                            |
|--------|-------------------------------|----------------------------------------|
| GET    | `/api/catalog`               | List all available Pokemon            |
| GET    | `/api/catalog/search`        | Search Pokemon by name or skill       |
| GET    | `/api/catalog/{id}`          | Get details of a specific Pokemon     |


## API Documentation

Swagger-UI is enabled to provide an interactive API documentation interface.

- **Swagger-UI URL**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- **OpenAPI Docs**: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

You can use Swagger-UI to test endpoints and explore the API in detail.


## Postman Collection

To simplify API testing, a Postman collection is available. You can find it at:
```plaintext
test/resources/collection.json
```
Import this collection into Postman to test the endpoints.


## Development

### Local Database (H2 Console)
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: _empty_

### Running with custom profiles
To run with different profiles, use:
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```


## Technologies Used

- **Java 17+**
- **Maven 3+**
- **Spring Boot**
  - Spring Data JPA
  - Spring Security
- **H2 Database** (for development)
- **PokeAPI** (for Pokemon data)
- **Swagger-UI** (for API documentation)


## Contributing

We welcome contributions! Fork the repository and create a pull request.


## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE.md) file for details.
