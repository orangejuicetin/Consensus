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


const getAllTopics = () => {
  return Topic.find({}, (err, topics) => {
    if (err) {
      console.log(err)
    } else {
      let topicList = [];
      topics.forEach((topic) => {
        topicList.push(topic);
      });
      return topicList;
    }
  });
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

const deleteTopic = (id) => {
  return Topic.deleteOne({
    _id: id
  }, (err) => {
    if (err) {
      console.log(err);
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



// <------------------  Exports  --------------------->


module.exports = {
  userAPI: {
    findByCredentials,
    createUser,
    getUser
  },
  topicAPI: {
    createNewTopic,
    getAllTopics,
    findTopic,
    deleteTopic
  },
  cardAPI: {
    createNewCard
  }
}