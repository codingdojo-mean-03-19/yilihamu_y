const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    title:{
      type: String,
      trim: true,
      required: [true, 'title is required.'],
      minlength: [2, 'title must be at least 2 characters long.']
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'description is required.'],
      minlength: [3, 'description must be at least 3 characters long.']
    },
    completed:{type:Boolean,default:false}
    },
    {timestamps:true}
);
module.exports = mongoose.model('Task', taskSchema);
