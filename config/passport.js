// load our dependencies
let LocalStrategy = require('passport-local').Strategy;

// load our user model
let User = require('../app/models/user');

// export this function to the rest of our app
module.exports = function(passport) {


// passport session setup ==========

// serializes the user for the session
passport.serializeUser(function(user, callback) {
	callback(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, callback) {
	User.findById(id, function(err, user) {
		callback(err, user);
	});
});

// Local Signup
passport.use('local-signup', new LocalStrategy({
	usernameField : 'email',
	passwordField : 'password',
	passReqToCallback : true
	}, function(req, email, password, callback){
// Find a user with this email
// we are checking to see if the user trying to login already exists
	User.findOne({'local.email' : email}, function(err,user) {
		if (err) return callback(err);
// If there already is a user with this email
        if (user) {
		return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
      	} else {
// if there is no user registered with this email
// Create a new user
	var newUser            = new User();
	newUser.local.email    = email;
	newUser.local.password = newUser.encrypt(password);
// save the user to the db
	newUser.save(function(err) {
	  	if (err) throw err;
	  	return callback(null, newUser);
		});
    }
   });
}));

// Local Login
passport.use('local-login', new LocalStrategy({
	usernameField : 'email',
	passwordField : 'password',
	passReqToCallback : true
	}, function(req, email, password, callback){
// Search for a user with this email
	User.findOne({'local.email': email}, function(err, user) {
		if (err) return callback(err);
// If no user found
		if (!user) {
		return callback(null, false, req.flash('loginMessage', "Username does not exist"));
		}
//If wrong password
		if(!user.validPassword(password)) {
		return callback(null, false, req.flash('loginMessage', "Wrong Password"));
		}
		return callback(null, user);
		});
	}));
};