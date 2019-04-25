const Book = require('mongoose').model('Book');
const Author = require('mongoose').model('Author');

module.exports ={
  index(req, res){
    Author.find({})
      .then(authors => res.json(authors))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },
  show(req, res){
    Author.findById(req.params.id)
      .populate('books')
      .then(author => res.json(author))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },
  create(req, res){
    Author.create(req.body)
      .then(author => res.json(author))
      .catch(error => res.status(Http.UnprocessableEntity).json(error));
  },
  update(req, res){
    Author.findByIdAndUpdate(req.params.id, req.body)
    .then(author => res.json(author))
    .catch(error => res.status(Http.UnprocessableEntity).json(error));
  },
  delete(req, res){
    Author.findByIdAndRemove(req.params.id)
    .then(author => res.json(author))
    .catch(error => res.status(Http.UnprocessableEntity).json(error));
  }
};
