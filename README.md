# Task API
> **© 2026 Vedant Khalshinge. All Rights Reserved.**  
> *This code is proprietary. Unauthorized copying, distribution, or use is strictly prohibited.*

A RESTful CRUD API for managing Tasks built with Node.js, Express, and MongoDB.

## Developer Project Page (Frontend)

This repository includes a custom, modern, minimal developer-focused landing page for the project. When the API server is running, you can view the portfolio page by navigating to `http://localhost:3000/` in your browser. The frontend files are located in the `public/` directory.

## Features

- Complete CRUD functionality for Tasks
- Mongoose schemas with validation
- Centralized error handling
- Basic logging using morgan

## Prerequisites

- Node.js (v14 or higher recommended)
- MongoDB running locally or a MongoDB Atlas URI

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Rename `.env.example` to `.env` and update the `MONGODB_URI` if necessary.
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/taskdb
   ```

3. **Run the server:**
   ```bash
   npm start
   ```

## API Endpoints

- **GET /api/tasks** - Get all tasks
- **GET /api/tasks/:id** - Get a single task by ID
- **POST /api/tasks** - Create a new task
- **PUT /api/tasks/:id** - Update a task by ID
- **DELETE /api/tasks/:id** - Delete a task by ID

## Testing

A Postman collection (`TaskAPI.postman_collection.json`) is included in the repository. You can import this into Postman to quickly test all endpoints.
