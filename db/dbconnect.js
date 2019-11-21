const Sequelize = require('sequelize');

const sequelize = new Sequelize('cis197', 'root', 'rajivgandhi', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  port: '3306',
  logging: false
});

// register the user model with sequelize
const user = sequelize.define('user', require('./models/user'));

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established');
  })
  .catch(err => {
    console.log('Unable to connect to the database: ', err);
  });

// load the models onto the database
sequelize.sync().then(() => console.log('synced'));

module.exports = {
  user
};
