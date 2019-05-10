const Note= require('mongoose').model('Note');
const { Http } = require('@status/codes');

module.exports = {
  index(_request, response) {
    Note.find({})
      .then(notes => response.json(notes))
      .catch(error =>
        response.status(Http.InternalServerError).json(error)
      );
  },
  create(request, response) {
    Note.create(request.body)
      .then(note => response.json(note))
      .catch(error =>
        response.status(Http.UnprocessableEntity).json(error)
      );
  },
};

