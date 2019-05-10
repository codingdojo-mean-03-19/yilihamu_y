const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  playerStatus: {
    type: String,
    enum: ['playing', 'not playing', 'undecided'],
    lowercase: true,
    required: true,
    trim: true,
    default: 'undecided'
  }
});

const playerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required.'],
    minlength: [2, 'name must be at least 2 characters long.'],
    trim: true,
    index: true,
  },
  preferredPosition: {
    type: String,
    default: 'None'
  },
  // nest game schema inside player schema
  games: [gameSchema]
  }, {
  timestamps: true
});


module.exports = mongoose.model('Player', playerSchema);

