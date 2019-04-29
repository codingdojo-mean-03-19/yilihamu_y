const Task= require('mongoose').model('Task');

module.exports = {
    index(req,res){
        Task.find({},function(err,task){
            if (err){res.json({message: "Error", error: err})}
            else {res.json(task)}
        })    
    },

    create(req,res){
        Task.create(req.body,function(err,task){
            if (err){res.json({message: "Error", error: err})}
            else {res.json({message:"Task created successfully", task:task})}
        })
    },


    destroy(req,res){
        Task.findByIdAndRemove(req.params.id,function(err,task){
            if (err){res.json({message: "Error", error: err})}
            else {res.json({message:"Delete successful"})}
        })
    },

    show(req,res){
        Task.findById(req.params.id,function(err,task){
            if (err){res.json({message: "Error", error: err})}
            else {res.json(task)}
        })
    },

    update(req,res){
        Task.findOneAndUpdate({ _id: req.params.id }, req.body,function(err,task){
            if (err){res.json({message: "Error", error: err})}
            else {res.json(task)}
        })
    },

}