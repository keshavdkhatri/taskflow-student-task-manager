const express = require('express');
const router = express.Router();
const { createTask, getTasks } = require('../controllers/taskController');

// Mount routes
router.route('/')
  .post(createTask)
  .get(getTasks);

module.exports = router;
