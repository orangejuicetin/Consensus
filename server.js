/**
 * Server for the application!
 */

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

// Use EJS rendering machine
app.set('views', __dirname + '/public');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// set up bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set static files path
app.use(express.static(path.join(__dirname, 'public')));

// connect to the database
require;
app.get('/', (_, res) => {
  res.render('index');
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
