const { User, Card } = require('./dbconnect');

// database functions for the user 
const findByCredentials = (email, password) => {
  return User.findOne({
    where: { email: email, password: password }
  })
    .then(user => {
      return user;
    })
};

const createUser = ({ firstname, lastname, email, password }) => {
  return User.create({
    firstname,
    lastname,
    email,
    password
  })
}

const getUser = id => {
  return User.findByPk(id)
}


// database functions for cards/topics
const createTopic = (topic, description) => {
  return Card.create({
    topic,
    description
  })
}

module.exports = {
  User: {
    findByCredentials,
    createUser,
    getUser
  },
  Card: {
    createTopic
  }
}