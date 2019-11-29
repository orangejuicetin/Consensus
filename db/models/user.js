const Sequelize = require('sequelize');

module.exports = {
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING }
};
