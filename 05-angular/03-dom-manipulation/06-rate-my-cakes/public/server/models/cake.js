const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = Schema({
  rating: {
    type: Number,
    required: true,
    minimum: 1,
    maximum: 5
  },
  comment: {
    type: String,
    required: true
  }
}, {timestamp:true});

const cakeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  rating: [ratingSchema]
}, {timestamp:true});

module.exports = mongoose.model('Cake', cakeSchema);
module.exports = mongoose.model('Rating', ratingSchema);
