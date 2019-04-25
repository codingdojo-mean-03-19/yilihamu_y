const mongoose = require('mongoose');
const {Schema} = mongoose;

const AuthorsSchema = new Schema({
  firstName:{
      type: String,
      trim: true,
      required: [true, 'First name is required'],
      minlength: [2, 'Firt name must be at least 2 characters']
  },
  lastName:{
      type: String,
      trim: true,
      required: [true, 'Last name is required'],
      minlength: [2, 'Last name must be at least 2 characters']
  },
  countryOfOrigin:{
      type: String,
      trim: true,
      minlength: [3, 'Country of origin must be at least 3 characters']
  },
  birthYear: {
    type: Date,
    min: '1800-01-01',
    max: '2019-01-01'
  },
  books: [{
      type: Schema.Types.ObjectId,
      ref: 'Book'
  }]
}, {timestamps:true});

module.exports = mongoose.model('Author', AuthorsSchema);
