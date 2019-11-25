import Sequelize from 'sequelize';

const sequelize = new Sequelize('197_final', 'root', 'Transformers1', {
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

export { user };
