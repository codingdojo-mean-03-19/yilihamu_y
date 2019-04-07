const People= require('mongoose').model('People');

module.exports = {
  index(request, response) {
    People.find({})
      .then(people => response.json(people))
      .catch(error => response.json(error));
  },
  show(request, response) {
    People.findOne(request.params)
      .then(People=> {
        response.json(People? People: 'No such People existed in 1955!!');
      })
      .catch(error => response.json(error));
  },
  create(request, response) {
    People.create(request.params)
      .then(People=> response.json(People))
      .catch(error => response.json(error));
  },
  destroy(request, response) {
    People.remove(request.params)
      .then(result => response.json(result))
      .catch(error => response.json(error));
  },
};