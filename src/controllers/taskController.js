const Task = require('../models/Task');

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, count: tasks.length, data: tasks });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single task
// @route   GET /api/tasks/:id
// @access  Public
const getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    
    if (!task) {
      res.status(404);
      return next(new Error(`Task not found with id of ${req.params.id}`));
    }
    
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new task
// @route   POST /api/tasks
// @access  Public
const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Public
const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    
    if (!task) {
      res.status(404);
      return next(new Error(`Task not found with id of ${req.params.id}`));
    }
    
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Public
const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    
    if (!task) {
      res.status(404);
      return next(new Error(`Task not found with id of ${req.params.id}`));
    }
    
    await task.deleteOne();
    
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
