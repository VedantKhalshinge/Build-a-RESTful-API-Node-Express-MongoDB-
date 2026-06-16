/**
 * @project RESTful API (Node + Express + MongoDB)
 * @author Vedant Khalshinge
 * @copyright 2026 Vedant Khalshinge. All rights reserved.
 * @description Unauthorized copying, modification, or distribution is strictly prohibited.
 */
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title for the task'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description for the task'],
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', taskSchema);

