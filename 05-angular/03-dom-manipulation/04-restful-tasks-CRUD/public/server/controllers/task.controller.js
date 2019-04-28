const Task= require('mongoose').model('Task');
const {Http} = require ('@status/codes');

module.exports = {
    index(_req, res){
      Task.find({})
      .then(tasks => res.json(tasks))
      .catch(error => res.status(Http.InternalServerError).json(error))
    },

    create(req,res){
      Task.create(req.body)
      .then(task => res.json(task))
      .catch(error => {
        const errors = Objects.keys(error.errors).map(key => error.errors[key].message);
        res.status(Http.UnprocessableEntity).json(errors);
      });
    },

    show(req,res){
      const {task_id : taskId} = req.params;
      Task.findById(taskId)
      .then(task => res.json(task))
      .catch(error => res.status(Http.UnavailableForLegalReasons).json(error))
    },

    update(req,res){
      const {task_id : taskId} = req.params;
      Task.findByIdAndUpdate(taskId, req.body, {new:true})
      .then(task => res.json(task))
      .catch(error => {
        const errors = Objects.keys(error.errors).map(key => error.errors[key].message);
        res.status(Http.UnprocessableEntity).json(errors);
      })
    },

    destroy(req,res){
      const {task_id : taskId} = req.params;
      Task.findByIdAndRemove(taskId)
      .then(task => res.json(task))
      .catch(error => res.status(Http.ResetContent).json(error))
    }
}
