# Social Network API

This project is a Social Network API designed to allow users to create, manage, and react to thoughts. It supports basic CRUD operations for handling users, thoughts, and reactions. I built this project to learn and apply key backend development concepts, particularly related to building RESTful APIs, using MongoDB, and integrating Mongoose for database management.

## Table of Contents

- [Project Overview](#project-overview)
- [What I Learned](#what-i-learned)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Models](#models)
- [Seeding Database](#seeding-database)
- [License](#license)

## Project Overview

The Social Network API is a backend service that simulates basic social network functionality. It allows users to post thoughts, react to them, and associate thoughts with specific users. The application is built using Node.js and Express.js for the backend, with MongoDB as the database to store user, thought, and reaction data. This API can be consumed by a frontend application or used for learning purposes.

## What I Learned

- **Building RESTful APIs**: I gained hands-on experience in designing RESTful APIs by implementing various routes and HTTP methods (GET, POST, PUT, DELETE) for managing thoughts, reactions, and users.
  
- **CRUD Operations**: I implemented full Create, Read, Update, and Delete functionality for the main resources in the project (users, thoughts, and reactions), which helped me understand the foundational operations of backend systems.
  
- **Database Integration**: I used MongoDB as the database for the project and Mongoose as the Object Data Modeling (ODM) library to handle schema definitions and database interactions. This gave me experience in structuring data, relationships between documents (users, thoughts, reactions), and working with NoSQL databases.
  
- **Express Middleware**: I used Express.js to handle API routing and request/response handling. I also explored middleware in Express to enhance request handling and data validation.
  
- **Seeding Data**: I implemented a script to seed the database with sample data, which helped me learn how to populate a database for testing and development purposes.

## Tech Stack

- **Node.js**: A JavaScript runtime that allows running JavaScript code on the server side. It’s the foundation of this backend API.
  
- **Express.js**: A minimal and flexible Node.js web application framework that simplifies routing and middleware handling. Express is used to set up routes for API endpoints.

- **MongoDB**: A NoSQL database used for storing user data, thoughts, and reactions. MongoDB provides flexibility in handling unstructured data.
  
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB, used to define schemas and interact with the database using JavaScript.

- **dotenv**: A module that loads environment variables from a `.env` file into `process.env`. It is used to store sensitive data like the MongoDB URI.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/social-network-api.git
2. Navigate into the project directory:
cd social-network-api
3. Install dependencies:
npm install
4. Create a .env file in the root directory and add your MongoDB URI:
MONGODB_URI=mongodb://localhost:27017/socialNetworkDB

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Video
https://drive.google.com/file/d/1jIeG3M7y-r8uU9rdO-BsTIlaZgdn_maL/view?usp=sharing