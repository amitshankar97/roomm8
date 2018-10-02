var mongoose = require('mongoose');

function Email (path, options) {
	mongoose.SchemaTypes.String.call(this, path, options);
	function validateEmail (val) {
		// match `anything@anything.edu`
		return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(val);
	}
	this.validate(validateEmail, 'invalid email address');
}

Email.prototype.__proto__ = mongoose.SchemaTypes.String.prototype;

Email.prototype.cast = function (val) {
	return val.toLowerCase();
};

mongoose.SchemaTypes.Email = module.exports = Email;
mongoose.Types.Email = String;

/*
 * StudentEmail : Custom Schema
 */

function StudentEmail(path, options) {
	mongoose.SchemaTypes.call(this, key, options, 'StudentEmail')
}

StudentEmail.prototype = Object.create(mongoose.SchemaType.prototype);

StudentEmail.prototype.cast = function(val) {
	var _val = Object.toString(val);

	//perform the regEx
	//if passes regEx
		// return _val
	// else
		// throw new Error(`StudentEmail: ${_val} is not a valid Student Email.`);

}
