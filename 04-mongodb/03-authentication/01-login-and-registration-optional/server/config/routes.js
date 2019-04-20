const usersController = require('../controllers/users.js')
const sessionsController = require('../controllers/sessions.js')

module.exports = function(app){
	app.get('/', usersController.index)
	app.get('/users', usersController.index)
	app.get('/users/:id', usersController.show)
  app.post('/users', usersController.create)
  // app.get('/users/edit/:id', usersController.show_edit)
	// app.post('/users/:id', usersController.edit)
	// app.post('/users/destroy/:id', usersController.destroy)

	app.post('/login', sessionsController.create)
	app.delete('/sessions', sessionsController.delete)
}
