const taskController = require('../controllers/tasks');

module.exports = function(app) {
    app.get('/all', taskController.index);
    app.post('/new', taskController.create);
    app.delete('/destroy/:id', taskController.destroy);
    app.get('/:id', taskController.show);
    app.put('/:id', taskController.update);
};