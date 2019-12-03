// const Sequelize = require('sequelize');

// module.exports = {
//   email: { type: Sequelize.STRING, allowNull: false },
//   password: { type: Sequelize.STRING, allowNull: false },
//   firstname: { type: Sequelize.STRING },
//   lastname: { type: Sequelize.STRING }
// };

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: String,
  lastname: String,
});

module.exports = mongoose.model('User', UserSchema)
