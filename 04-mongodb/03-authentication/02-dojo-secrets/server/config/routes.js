const usersController = require('../controllers/users.js')
const sessionsController = require('../controllers/sessions.js')
const secretsController = require('../controllers/secrets.js')

module.exports = function(app){
	app.get('/', usersController.index)
	// app.get('/users/:id', usersController.show)
  app.post('/users', usersController.create)
  // app.get('/users/edit/:id', usersController.show_edit)
	// app.post('/users/:id', usersController.edit)
	// app.post('/users/destroy/:id', usersController.destroy)

	app.post('/login', sessionsController.create)
  app.get('/sessions', sessionsController.delete)
  //

  app.get('/secrets', secretsController.show_secret)
  app.post('/secret', secretsController.create_secret)
  //
  app.get('/secret/:id', secretsController.show_one)
  //
  app.post('/secretandcomment/:id', secretsController.create_comment)
  app.get('/destroy', secretsController.delete)
}

