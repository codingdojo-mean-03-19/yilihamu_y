const mongoose = require('mongoose');
const { Schema } = mongoose;

const SecretSchema = new Schema({
  secret: {
      type: String,
      require: [true, 'Secret must not be blank.'],
      minlength: [15, 'Secret have to be at least 15 characters.'],
  },
  users: [
    { type: Schema.Types.ObjectId,
      ref: 'Secret'
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Secret', SecretSchema);
