const router = require('express').Router();
const taskRouter = require('./task.route');

module.exports = router.use('/tasks', taskRouter)
