const session = require('express-session');
const User = require('../models/user.js');
const Secret = require('../models/secret.js');
const Comment = require('../models/comment.js');

const flash_errors = (req, errors) => {
  for (let error in errors) {
      req.flash('errors', errors[error]);
  }
}

module.exports={
    show_secret: (req, res) => {
      const user = req.session.user_id;
      Secret.find({}, (err, results) => {
          if(err){
            console.log(err);
          }
          console.log(results)
          return res.render('welcome', { data:results, user:user})
      });
    },

    create_secret: (req, res) => {
      const secret_input = req.body.secret;
      if(secret_input){
          const userId = req.session.user_id;
          User.findOne({_id: userId}, (err, data) =>{
              if(data){
                  Secret.create({
                      text: req.body.secret,
                      _users: data
                  }).then(result =>{
                      console.log(result);
                      res.redirect('/secrets');
                  }).catch(err =>{
                      console.log(err);
                      res.render('welcome');
                  })
              }else{
                  res.redirect('/secrets');
              }
              if(err){
                  console.log(err);
                  res.redirect('/secrets');
              }
          });
      } else {
          flash_errors(req, err.errors);
          res.redirect('/secrets');
      }
    },

  show_one: (req, res) => {
      const secretId = req.params.id;
      Secret.findOne({ _id: secretId })
      .then(message =>{
        Comment.find({ _secret: message }, (err, data) =>{
          if(data){
            console.log('data found ', data);
            res.render('secretandcomment', { msg: message, data:data });
          }else{
            res.redirect(`/secret/${secretId}`);
          }
        })
      })
      .catch(err =>{
        console.log(error);
        flash_errors(req, err.errors);
        res.redirect(`/secret/${secretId}`);
      })
    },

   create_comment: (req, res) => {
      const messageID = req.params.id;
      Secret.findOne({ _id: req.params.id })
      .then(c => {
        Comment.create({
          comment: req.body.comment,
          _secret: c
        })
        res.redirect(`/secret/${messageID}`);
      })
      .catch(err => {
        console.log(err);
        flash_errors(req, err.errors);
        res.redirect(`/secret/${messageID}`);
      })
    },

    delete: (req, res) => {
      Secret.remove({_id: req.params.id}, function(err){
        let error = [{message: 'Record revomed'}];
        flash_errors(req, error);
        res.redirect('/welcome');
      })
    }
}
