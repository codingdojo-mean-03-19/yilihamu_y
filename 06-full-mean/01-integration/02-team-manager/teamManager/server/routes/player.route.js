
const {playerController} = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', playerController.index)
  .post('/', playerController.create)
  .get('/:id', playerController.show)
  // .put('/:id', playerController.update)
  .delete('/:id', playerController.destroy);

