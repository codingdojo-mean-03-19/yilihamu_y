
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
                return res.redirect(`/users/${user._id}`);
            })
            .catch( () => {
                let error = [{message: 'Invalid Password'}];
                flash_errors(req, error);
                return res.redirect('/');
            });
        });
    },
    delete: (req, res) => {
        if ('user_id' in session) {
            delete session['user_id'];

            return res.redirect('/');
        }

        return res.redirect('/');
    }
}
