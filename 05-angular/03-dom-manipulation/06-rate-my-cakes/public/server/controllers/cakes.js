const Cake= require('mongoose').model('Cake');
const Rating= require('mongoose').model('Rating');

function handler(res) {
  return function(err, result) {
      if(err) {
          res.json({
              message: "Error",
              error: err
          });
      }
      else {
          res.json({
              message: "Success",
              data: result
          });
      }
  }
}

module.exports = {
  index: function(req, res) {
      Cake.find({}, handler(res));
  },

  create: function(req, res) {
      Cake.create(req.body, handler(res));
  },

  rate: function(req, res) {
      Cake.findById(req.params.id, function(err, cake){
          if(err) {
              res.json({message: "Error:", error: err});
          }
          else {
              cake.rating.push(req.body);
              cake.save(handler(res));
          }
      });
  },

  show: function(req, res) {
      Cake.findById(req.params.id, handler(res));
  }

}
