const bookController = require('../controllers/books');
const authorController = require('../controllers/authors');

module.exports = function(app) {
  app.get('/authors', authorController.idex);
  app.get('/authors/:id', authorController.show)
  app.post('/authors', authorController.create)
  app.post('/authors/:id/update', authorController.update)
  app.get('/authors/:id/delete', authorController.delete)

  app.post('/books', bookController.create)
  app.get('/books/:id/delete', bookController.delete)

}
