const Player= require('mongoose').model('Player');
const { Http } = require('@status/codes');

module.exports = {
  index(_request, response) {
    Player.find({})
      .then(players => response.json(players))
      .catch(error =>
        response.status(Http.InternalServerError).json(errorMessage(error))
      );
  },
  create(request, response) {
    request.body.games = [{ number: 1 }, { number: 2 }, { number: 3 }];
    Player.create(request.body)
      .then(player => response.json(player))
      .catch(error =>
        response.status(Http.UnprocessableEntity).json(errorMessage(error))
      );
  },
  show(request, response) {
    Player.findById(request.params.id)
      .then(player => response.json(player))
      .catch(error =>
        response.status(Http.NoContent).json(errorMessage(error)));
  },
  // update(request, response) {
  //   Player.findByIdAndUpdate(request.params.id, request.body, { new: true })
  //     .then(player => response.json(player))
  //     .catch(error =>
  //       response.status(Http.UnprocessableEntity).json(errorMessage(error)));
  // },
  destroy(request, response) {
    Player.findByIdAndRemove(request.params.id)
      .then(player => response.json(player))
      .catch(error =>
        response.status(Http.UpgradeRequired).json(errorMessage(error)));
  },
};

function errorMessage(error) {
  let errors = [];

  if (error.message) {
    errors.push(error.message);
  } else if (error.errors) {
    // Validation Errors
    Object.keys(error.errors)
        .forEach(key => errors.push(error.errors[key].message));
  } else if (typeof error === 'string') {
    errors.push(error);
  } else {
    errors.push('Something went wrong');
  }

  return errors;
}
