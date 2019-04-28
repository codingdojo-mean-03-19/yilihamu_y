const { taskController } = require('../controllers')
const router = require('express').Router();

module.exports = router
.get('/', taskController.index)
.post('/', taskController.create)
.get('/:task_id', taskController.show)
.put('/:task_id', taskController.update)
.delete('/task_id', taskController.destroy);
