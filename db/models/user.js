const Sequelize = require('sequelize');

module.exports = {
  email: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  firstname: { type: Sequelize.STRING },
  lastname: { type: Sequelize.STRING }
};
