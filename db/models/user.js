const Sequelize = require('sequelize');

// Schema for user
module.exports = {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
};
