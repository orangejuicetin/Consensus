/**
 * Server for the application!
 */
import express from 'express';
import path from 'path';
import ejs from 'ejs';
import bodyparser from 'body-parser';
import passport from 'passport';
// import passportFunctions from 'passportFunctions';
import flash from 'connect-flash';
const LocalStrategy = require('passport-local').Strategy;
import { user } from '../../db/dbconnect';

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

// Use EJS rendering machine
app.set('views', __dirname + '/public');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// set up bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// allow for use of message flash
app.use(flash());

// set static files path
app.use(express.static(path.join(__dirname, 'public')));

// connect to the database
// require('../../db/dbconnect');

// setting up passport.js for authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalStrategy(function(username, password, done) {
    user.findByUsername(username, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'incorrect username' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'incorrect password' });
      }
      return done(null, user);
    });
  })
);

//
app.get('/', (_, res) => {
  res.render('index');
});

app.get('login', (req, res) => {
  res.render('login');
});

app.get('/export', (req, res) => {
  res.json(JSON.parse(req.query.data));
});

app.get('*', (req, res) => {
  res.sendFile(path.join());
});

// start server
app.listen(app.get('port'), () => {
  console.log('Listening...');
});
