const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required.'],
    minlength: [3, 'name must be at least 3 characters long.']
  },
}, {timestamp:true});

module.exports = mongoose.model('Author', authorSchema);

