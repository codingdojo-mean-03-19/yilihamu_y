const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  comment: {
      type: String,
      require: [true, 'Secret field can not be blank.'],
      minlength: [15, 'Comment have to be at least 15 characters.'],
  },
  secrets: [
    { type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]},  { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);
