const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
 	first_name: {
 		type: String,
 		required: [true, "First name is required"],
 		trim: true,
 	},
 	last_name: {
 		type: String,
 		required: [true, "Last name is required"],
 		trim: true,
 	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minlength: 8,
		maxlength: 32,
		validate: {
			validator: function(value) {
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
	  		},
	  		message: "Password must contain at least 1 number, uppercase, and special character"
		}
	},
	birthday: {
		type: Date,
		required: [true, "Birthday is required"]
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		validate: {
			validator: function(value) {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
			},
			message: "Invalid email"
		}
	}
}, { timestamps: true });


UserSchema.methods = {
	encryptPassword: function(next){
		let user = this;
		bcrypt.hash(user.password, 10)
		.then( function(hashed_password){
			user.password = hashed_password;
			next();
		});
  }
}

UserSchema.pre('save', function(next){
	let user = this;
	user.encryptPassword(next);
});

module.exports = mongoose.model('User', UserSchema)
