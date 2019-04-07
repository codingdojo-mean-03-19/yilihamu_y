const mongoose = require('mongoose');
const { Schema } = mongoose;

const peopleSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('People', peopleSchema);