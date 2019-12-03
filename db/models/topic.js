// const Sequelize = require('sequelize');

// module.exports = {
//     name: { type: Sequelize.STRING, allowNull: false },
//     description: { type: Sequelize.STRING }
//     // cards: {
//     //     type: Sequelize.STRING,
//     //     get: function () {
//     //         return JSON.parse(this.getDataValue('cards'));
//     //     },
//     //     set: function (val) {
//     //         return this.setDataValue('cards', JSON.stringify(val))
//     //     }
//     // }
// };
const mongoose = require('mongoose');

const TopicSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    cards: [
        {
            title: { type: String, required: true },
            description: String,
            vote: Number
        }
    ]
});

module.exports = mongoose.model('Topic', TopicSchema); 