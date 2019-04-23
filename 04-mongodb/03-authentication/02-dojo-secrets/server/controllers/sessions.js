const session     = require('express-session');
const User        = require('../models/user.js');
const bcrypt      = require('bcrypt')

const flash_errors = (req, errors) => {
    for (let error in errors) {
        req.flash('errors', errors[error]);
    }
}

module.exports = {
    create: (req, res) => {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (! user) {
                let error = [{message: 'Invalid email or password'}];
                flash_errors(req, error);
                return res.redirect('/');
            }
            bcrypt.compare(req.body.password, user.password)
            .then( () => {
                session.user_id = user._id;
                console.log(session.user_id)
                return res.redirect(`/secrets`);
            })
            .catch( () => {
                let error = [{message: 'Invalid Password'}];
                flash_errors(req, error);
                return res.redirect('/');
            });
        });
    },
    delete: (req, res) => {
      req.session.destroy();
      res.redirect('/');
    }
}
