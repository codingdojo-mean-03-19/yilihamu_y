const Book = require('mongoose').model('Book');
const Author = require('mongoose').model('Author');

module.exports ={
  create(req, res){
    Book.create(req.body)
    .then(book => {
      return Author.findById(book.author)
        .then(author => {
          author.books.push(book);
          return author.save();
        })
    })
    .then(book => res.json(book))
    .catch(error => res.status(Http.UnprocessableEntity).json(error));
  },
  delete(req, res){
    Book.findByIdAndRemove(req.params.id)
    .then(book => res.json(book))
    .catch(error => res.status(Http.UnprocessableEntity).json(error));
  }
};
