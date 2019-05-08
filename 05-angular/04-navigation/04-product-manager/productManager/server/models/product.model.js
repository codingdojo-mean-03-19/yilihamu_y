const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required. '],
    minlength: [3, 'name must be at least 3 characters long.']
  },
  price: {
      type: Number,
      required: [true, 'price is required.']
  },
  url: {
      type: String,
      required: [true, 'img URL is required.']
  }
}, {timestamp:true});

module.exports = mongoose.model('Product', productSchema);

