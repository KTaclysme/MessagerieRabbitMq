# RabbitMQ TypeScript Node.js Project

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Development](#development)
  - [Production](#production)
- [Scripts](#scripts)
- [Docker](#docker)
- [Linting](#linting)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project is a Node.js application written in TypeScript that uses RabbitMQ for messaging. It leverages Docker for containerization to ensure consistent environments for development and production.

## Features
- TypeScript for type safety and modern JavaScript features
- RabbitMQ for message brokering
- Docker and Docker Compose for container management
- ESLint for code linting
- Nodemon for hot-reloading during development

## Prerequisites
- [Node.js](https://nodejs.org/) (>= 14.x)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

### Development
For development purposes, use the following commands:

1. Start the Docker containers:
    ```bash
    npm run docker:up
    ```

2. Start the application with hot-reloading:
    ```bash
    npm run dev
    ```

### Production
For production, build the TypeScript code and start the application:

1. Build the project:
    ```bash
    npm run build
    ```

2. Start the Docker containers and the application:
    ```bash
    npm run start:docker
    ```

## Scripts
- `build`: Compiles the TypeScript code.
- `start`: Starts the compiled JavaScript application.
- `dev`: Starts the application in development mode with hot-reloading.
- `lint`: Runs ESLint to check for code issues.
- `lint:fix`: Runs ESLint and automatically fixes issues.
- `docker:up`: Starts the Docker containers.
- `docker:down`: Stops the Docker containers.
- `docker:restart`: Restarts the Docker containers.
- `start:docker`: Starts the Docker containers and then the application.
- `dev:docker`: Starts the Docker containers and then the application in development mode.

## Docker
The project includes a `docker-compose.yml` file to manage the Docker containers. Use the following commands to manage the containers:

- Start the containers:
    ```bash
    npm run docker:up
    ```

- Stop the containers:
    ```bash
    npm run docker:down
    ```

- Restart the containers:
    ```bash
    npm run docker:restart
    ```

## Linting
To maintain code quality, ESLint is used. Run the following commands to check and fix linting issues:

- Check for linting issues:
    ```bash
    npm run lint
    ```

- Automatically fix linting issues:
    ```bash
    npm run lint:fix
    ```

## Contributing
Contributions are welcome! Please create a pull request or submit an issue for any changes or improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this `README.md` file according to your project's specific details and requirements.
