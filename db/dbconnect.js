const Sequelize = require('sequelize');

const sequelize = new Sequelize('197_final', 'root', 'Transformers1', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
    logging: false
});

// register the user model with sequelize
const User = sequelize.define('user', require('./models/user'));

// register the user model with sequelize
const Card = sequelize.define('card', require('./models/card'));

// load the models onto the database
sequelize.sync().then(() => console.log('synced'));

module.exports = { User, Card };
