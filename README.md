# Simple Bank Api

## Description

This is a simple bank api application built with Node.js, Express, and Sequelize that manages user balances. The application includes functionalities to update the user balance while ensuring that the balance cannot be negative.

## Features

- Node.js with Express for handling HTTP requests.
- PostgreSQL as the database with Sequelize as the ORM.
- User balance management with transaction support to ensure data integrity.
- Joi for request validation.

## Prerequisites

- Node.js (v12.0.0 or later)
- PostgreSQL
- npm (Node Package Manager)

## Installation

- Clone the repository

- Install dependencies

```
npm install
```

- Set up environment variables

- Create a .env file in the root directory with the following content:

```
DB_USERNAME=yourusername
DB_PASSWORD=yourpassword
DB_DATABASE=simple_webapp_dev
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DIALECT=postgres
```

- Run database migrations

```
npm run migrate
```

## Usage

- Start the application

```
npm start
```

- Start the application in dev mode

```
npm run dev
```
