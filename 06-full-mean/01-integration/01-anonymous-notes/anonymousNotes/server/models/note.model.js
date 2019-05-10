const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    note: {
      type: String,
      required: [true, 'note is required.'],
      minlength: [3, 'note must be at least 3 characters long.'],
      trim: true,
    },
  }, {timestamps: true});

module.exports = mongoose.model('Note', noteSchema);

