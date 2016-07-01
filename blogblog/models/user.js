var mongooser = require('mongoose');
var Sschema - mongoose.Schema;

var UserSchema = new Schema({
	email:String,
	firstname:String,
	lastname:String,
	passwordHash: String,
	passwordSalt: String
});

module.exports = mongoose.model('User', UserSchema);