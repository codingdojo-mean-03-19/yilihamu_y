const Product= require('mongoose').model('Product');
const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    Product.find({})
        .then(products => res.json(products))
        .catch(error => res.status(Http.InternalServerError).json(error));
  },

  create(req, res) {
      Product.create(req.body)
          .then(product => res.json(product))
          .catch(error => {
              const errors = Object.keys(error.errors).map(key => error.errors[key].message);
              res.status(Http.UnprocessableEntity).json(errors);
          })
  },

  update(req, res) {
      const { product_id: productId } = req.params;
      Product.findByIdAndUpdate(productId, req.body, { new: true })
          .then(product => res.json(product))
          .catch(error => {
              const errors = Object.keys(error.errors).map(key => error.errors[key].message);
              res.status(Http.UnprocessableEntity).json(errors);
          })
  },

  show(req, res) {
      const { product_id: productId } = req.params;
      Product.findById(productId)
          .then(product => res.json(product))
          .catch(error => res.status(Http.UnavailableForLegalReasons).json(error));
  },
  destory(req, res) {
      const { product_id: productId } = req.params;
      Product.findByIdAndRemove(productId)
          .then(product => res.json(product))
          .catch(error => res.status(Http.ResetContent).json(error));
  }
};
