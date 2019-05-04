
const {authorController} = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get("/", authorController.index)
  .get("/:author_id", authorController.show)
  .post("/", authorController.create)
  .put("/:author_id", authorController.update)
  .delete("/:author_id", function(req, res){
    authorController.destory
  })

