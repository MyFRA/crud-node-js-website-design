// const localStrategy = require('passport-local').Strategy;
// const db = require('./db');
// const bcrypt = require('bcryptjs');

// module.exports = function(passport) {
//     passport.use(new LocalStrategy({

//     },
//         function(username, password, done) {
//           User.findOne({ username: username }, function(err, user) {
//             if (err) { return done(err); }
//             if (!user) {
//               return done(null, false, { message: 'Incorrect username.' });
//             }
//             if (!user.validPassword(password)) {
//               return done(null, false, { message: 'Incorrect password.' });
//             }
//             return done(null, user);
//           });
//         }
//     ));
// }