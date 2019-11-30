/**
 * Server for the application!
 */
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const passport = require('passport');
// import passportFunctions = require 'passportFunctions';
const flash = require('connect-flash');
const LocalStrategy = require('passport-local').Strategy;
const { user } = require('../../db/dbconnect');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
app.set('port', port);

io.on('connection', function (socket) {
  console.log('a user connected');
});

// Use EJS rendering machine
app.set('views', __dirname + '/public');
app.engine('html', ejs.__express);
app.set('view engine', 'html');


// set up bodyparser middleware
http.use(bodyparser.json());
http.use(bodyparser.urlencoded({ extended: true }));

// allow for use of message flash
http.use(flash());

// set static files path
http.use(express.static(path.join(__dirname, 'public')));

// connect to the database
// require('../../db/dbconnect');

// setting up passport.js for authentication
http.use(passport.initialize());
http.use(passport.session());
passport.use(
  new LocalStrategy(function (username, password, done) {
    user.findByUsername(username, function (err, user) {
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
http.get('/', (_, res) => {
  res.render('index');
});

http.get('login', (req, res) => {
  res.render('login');
});

http.get('*', (req, res) => {
  res.sendFile(path.join());
});

// start server
http.listen(app.get('port'), () => {
  console.log('Listening...');
});
