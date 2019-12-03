/**
 * Server for the application!
 */
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const io = require('socket.io');
const session = require('express-session')

// Connect to the database
require('../../db/dbconnect');

const { userAPI } = require('../../db/api')

const app = express();
// const http = require('http').createServer(app);
// const socketServer = io(http);

const port = process.env.PORT || 3000;
app.set('port', port);

// io.on('connection', function (socket) {
//   console.log('a user connected');
// });

// set static files path
app.use(express.static(path.join(__dirname, '..', '..', 'public')));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// set up bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))


// //before registering any routes
// app.use((req, res, next) => {
//   if (req.session.userId) {
//     userAPI.getUser(req.session.userId)
//       .then(user => {
//         req.user = user
//         next()
//       })
//   } else {
//     next()
//   }
// })


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'login.html'))
})

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'signup.html'))
})

app.post('/signup', (req, res) => {
  const {
    firstname,
    lastname,
    email,
    password
  } = req.body
  userAPI.findByCredentials(email, password)
    .then(user => {
      if (user) {
        //TODO: You already have an account... message
        res.redirect('/login')
      } else {
        // No user found
        userAPI.createUser({
          firstname,
          lastname,
          email,
          password
        })
          .then(() => {
            console.log('successfully created')
            res.redirect('/login')
          })
          .catch(error => {
            console.log(error)
            res.sendStatus(500)
          })
      }
    })
})

app.post('/login', (req, res) => {
  const {
    email,
    password
  } = req.body
  userAPI.findByCredentials(email, password)
    .then(user => {
      if (user) {
        req.session.userId = user._id
        res.redirect('/')
        console.log("!!!!")
      } else {
        res.redirect('/login')
      }
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/login')
    })
})

// todo - add button to main app that will let you log out 
app.get('/logout', (req, res) => {
  req.session.userId = null;
  res.redirect('/login')
})


// last check to see if one is logged in or not
// app.use((req, res, next) => {
//   if (!req.user) {
//     res.redirect('/login')
//   } else {
//     next()
//   }
// })

// attach router used for topic API requests to db here,
// only accessed if log in approved
app.use('/votespace', require('./routes/votespaceRouter'));


// Any non-api routes should be sent the html file as a response
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'app.html'));
});

// start server
app.listen(app.get('port'), () => {
  console.log('Listening on ' + app.get('port') + "...");
}); 
