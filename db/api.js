const { User, Topic } = require('./dbconnect');

// <------------------  USER  --------------------->

// database functions for the user 
const findByCredentials = (email, password) => {
  return User.findOne({
    email: email,
    password: password
  }, (err, user) => {
    console.log(user);
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
  return User.findOne({ _id: id })
}

// <------------------  TOPICS  --------------------->

// database functions for topics
const createNewTopic = ({ name, description }) => {
  return Topic.create({
    name,
    description
  });
}


const getTopicById = id => {
  return Topic.findOne({ _id: id })
}

const getAllTopics = () => {
  return Topic.find({});
}

const findTopic = (name, description) => {
  return Topic.findOne({
    name: name,
    description: description
  }, (err, topic) => {
    if (err) {
      console.log(err);
    } else {
      return topic;
    }
  });
}


// <-----------------  CARDS  ---------------------->

// database functions for cards
const createNewCard = async ({ id, title, description }) => {
  const topic = await Topic.findOne({
    _id: id,
  })
  topic.cards.push({ title: title, description: description, vote: 0 })
  return Topic.findOneAndUpdate({ _id: id }, { cards: topic.cards }, { new: true })
}

// const getCardsFromTopic = async id => {
//   const topic = await Topic.findOne({ _id: id });
//   topic.cards.map((card) => {
//     const {
//       title,
//       description
//     } = card;
//     if (title === queryTitle && description === queryDescription) {
//       return { card }
//     }
//   })
// }



// <------------------  Exports  --------------------->


module.exports = {
  userAPI: {
    findByCredentials,
    createUser,
    getUser
  },
  topicAPI: {
    createNewTopic,
    getTopicById,
    getAllTopics,
    findTopic
  },
  cardAPI: {
    // getCardFromTopic,
    createNewCard
  }
}