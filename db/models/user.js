const S = require('sequelize');

// Schema for user
module.exports = {
  username: {
    type: S.STRING
  },
  password: {
    type: S.STRING
  },
  name: {
    type: S.STRING
  }
};
