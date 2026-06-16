/**
 * @project RESTful API (Node + Express + MongoDB)
 * @author Vedant Khalshinge
 * @copyright 2026 Vedant Khalshinge. All rights reserved.
 * @description Unauthorized copying, modification, or distribution is strictly prohibited.
 */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Route files
const tasks = require('./routes/taskRoutes');

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Serve static project page
app.use(express.static(path.join(__dirname, '../public')));

// Dev logging middleware
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/tasks', tasks);

// Error handler middleware (must be after routers)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

