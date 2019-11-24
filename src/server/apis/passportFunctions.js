import passport from 'passort';
import { Strategy } from 'passport-local';
import flash from 'connect-flash';

passport.use(new Strategy(function(username, password, cb) {}));

let loginAuthenticate = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: 'Invalid username or password.'
});
