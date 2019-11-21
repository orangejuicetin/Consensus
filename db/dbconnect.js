const S = require('sequelize');

const sequelize = new S('cis197', 'root', 'justin', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  port: '3306',
  logging: false
});

// register the user model with sequelize
const user = sequelize.define('user', require('./models/user'));

// load the models onto the database
sequelize.sync().then(() => console.log('synced'));

module.exports = {
  user
};
