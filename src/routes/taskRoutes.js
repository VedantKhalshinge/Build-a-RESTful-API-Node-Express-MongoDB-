/**
 * @project RESTful API (Node + Express + MongoDB)
 * @author Vedant Khalshinge
 * @copyright 2026 Vedant Khalshinge. All rights reserved.
 * @description Unauthorized copying, modification, or distribution is strictly prohibited.
 */
const express = require('express');
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;

