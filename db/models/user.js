import Sequelize from 'sequelize';

module.exports = {
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING }
};
