# Express API Template

This repository serves as a starting point for building Express APIs, saving you time from setting up the project from scratch. It includes a structured folder setup, essential configurations, and examples to kickstart your development.

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Download and install Node.js from [nodejs.org](https://nodejs.org/).
- npm: npm is included with Node.js. Ensure it is installed by running `npm -v`.

### Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/floriankyn/express-api-template.git
   cd express-api-template
   ```
   
2. Install the dependencies:
   ```sh
    npm install
    ```
   
3. Copy the example environment file and make the required configuration changes in the .env file:
   ```sh
   cp src/api/config/.env.example src/api/config/.env
   ```
4. Start the development server:
    ```sh
    npm run dev
    ```
The API should now be running on http://localhost:3000.

## Usage

Provide examples and instructions on how to use the API or include features of the template.

## Folder Structure

- src/: Source code for the application.
    - api/: API specific code.
        - config/: Configuration files.
        - v1/: Version 1 of the API.
            - controller/: Controller files.
            - middleware/: Middleware files.
            - routes/: Route definitions.
            - validator/: Validation files.
- prisma/: Prisma ORM configuration and schema.

## Configuration

To configure the application, you need to set up environment variables. Copy the `.env.example` file in the `src/api/config/` directory to a new file named `.env`, and fill in the values as described below:

- `PORT`: The port number on which the Express server will run. For example, `3000`.
- `JWT_SECRET`: A secret key for signing JSON Web Tokens. Ensure this is a secure and unique string.
- `DB_NAME`: The name of your database.
- `DB_USERNAME`: The username for connecting to your database.
- `DB_PASSWORD`: The password for connecting to your database.
- `DB_DIALECT`: The dialect of your database (e.g., `mysql`, `postgres`, `sqlite`).
- `DB_HOST`: The hostname or IP address of your database server.

Example:

```env
PORT=3000
JWT_SECRET=your_jwt_secret
DB_NAME=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_DIALECT=mysql
DB_HOST=localhost
```

Ensure you replace the placeholder values with your actual configuration. Keep this file secure, especially the JWT_SECRET, as it is crucial for the security of your application.



