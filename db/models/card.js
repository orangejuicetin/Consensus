const Sequelize = require('sequelize');

module.exports = {
    topic: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING }
};
