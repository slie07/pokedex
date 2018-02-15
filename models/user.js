const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
let UserSchema = new mongoose.Schema({
	email: String,
	password: String
});

UserSchema.methods.encrypt = function(password){
	bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

let User = mongoose.model('User', UserSchema);

module.exports = User;