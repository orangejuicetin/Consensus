// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('197_final', 'root', 'Transformers1', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: '3306',
//     logging: false
// });

// // register the user model with sequelize
// const User = sequelize.define('user', require('./models/user'));

// // register the card model with sequelize
// const Card = sequelize.define('card', require('./models/card'));

// // register the topic with sequelize
// const Topic = sequelize.define('topic', require('./models/topic'))

// Card.belongTo(Topic);
// Topic.hasMany(Card);

// // load the models onto the database
// sequelize.sync().then(() => console.log('database synced'));

// module.exports = { User, Card, Topic };
const mongoose = require('mongoose');
require('dotenv/config');
const User = require('./models/user');
const Topic = require('./models/topic');

mongoose.connect(process.env.DB_CONNECTION,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

mongoose.connection.on('connected', () => {
    console.log('Successfully connected to database') //eslint-disable-line
})

mongoose.connection.on('error', () => {
    console.log('Error connecting to database') //eslint-disable-line
})

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from database') //eslint-disable-line
})

module.exports = { User, Topic }

