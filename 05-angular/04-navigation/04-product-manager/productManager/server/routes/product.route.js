
const {productController} = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get("/", productController.index)
  .get("/:product_id", productController.show)
  .post("/", productController.create)
  .put("/:product_id", productController.update)
  .delete("/:product_id", productController.destory)

