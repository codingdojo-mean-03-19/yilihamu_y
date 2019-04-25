const mongoose = require('mongoose');
const {Schema} = mongoose;

const BooksSchema = new Schema({
    title:{
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        minlength: [2, 'More than 1 char needed']
    },
    pubYear: {
      type: Date,
      min: '1800-01-01',
      max: '2019-01-01'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
}, {timestamps:true} )

module.exports = mongoose.model('Book', BooksSchema);


