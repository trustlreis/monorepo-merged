# Pokémon Master UI

![License](https://img.shields.io/github/license/trustlreis/pokemon-master-management)
![React](https://img.shields.io/badge/react-18.0.0-blue?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-16.x-green?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-4.x-blue?logo=typescript&logoColor=white)
![npm](https://img.shields.io/badge/npm-8.x-red?logo=npm&logoColor=white)

The **Pokémon Master UI** is the front-end application for the Pokémon Master Management System. It provides a user-friendly interface for trainers to manage their Pokémon, battles, and teams. Built with modern web technologies, this project aims to deliver a seamless and intuitive user experience.


# Features

- Pokémon Catalog simple search


## Planned Features

- 🖥️ **Interactive Interface**: Manage your Pokémon collection, battles, and teams with ease.
- ⚡ **Real-time Updates**: Stay updated with live data fetched from the Pokémon Master Client.
- 🎨 **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- 🔍 **Search and Filter**: Quickly find and organize your Pokémon.


## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 16.x)
- [npm](https://www.npmjs.com/) (>= 8.x)


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/trustlreis/pokemon-master-management.git
   cd pokemon-master-management/pokemon-master-ui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```


## Usage

### Development Server

Run the development server for local testing:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to access the application.

### Build for Production

Generate optimized static files for production:

```bash
npm run build
```


## Testing

Run the test suite to ensure the application is working as expected:

```bash
npm test
```


## Project Structure

```plaintext
pokemon-master-ui/
├── public/          # Static assets (images, icons, etc.)
├── src/
│   ├── components/  # Reusable UI components
│   ├── App.tsx      # Main application component
│   └── index.tsx    # Entry point of the application
├── .gitignore       # Git ignore file
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```


## API Integration

This project communicates with the [Pokémon Master Client](https://github.com/trustlreis/pokemon-master-management/tree/main/pokemon-master-client) for backend functionality.

### Environment Variables

The following environment variables are used to configure the API client:

| Variable                     | Description                              | Default Value                     |
|------------------------------|------------------------------------------|-----------------------------------|
| `REACT_APP_API_BASE_URL`     | The base URL for the API                | `http://localhost:8080/api`      |
| `REACT_APP_API_USERNAME`     | The username for API authentication     | `user`                           |
| `REACT_APP_API_PASSWORD`     | The password for API authentication     | `user`                           |

#### Example `.env` File

Create a `.env` file in the root directory of the project and define the variables as needed:

```plaintext
REACT_APP_API_BASE_URL=http://your-api-server.com/api
REACT_APP_API_USERNAME=your-username
REACT_APP_API_PASSWORD=your-password
```

Ensure the **Pokémon Master Client** is running locally or hosted, and these environment variables are set up before starting the application.


## License

This project is licensed under the [MIT License](../LICENSE.md).


## Acknowledgements

Special thanks to the contributors and the open-source community for making this project possible.


## Contact

For questions or support, please contact:

- **Project Owner**: [@trustlreis](https://github.com/trustlreis)
- **Issues**: Use the [GitHub Issues](https://github.com/trustlreis/pokemon-master-management/issues)
