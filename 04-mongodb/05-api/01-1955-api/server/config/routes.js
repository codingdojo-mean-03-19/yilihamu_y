const theYearController = require('../controllers/peoples');

module.exports = function(app) {
  app.get('/', theYearController.index);
  app.get('/new/:name', theYearController.create);
  app.get('/remove/:name', theYearController.destroy);
  app.get('/:name', theYearController.show);
};