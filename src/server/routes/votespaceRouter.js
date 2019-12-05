const { topicAPI, cardAPI } = require('../../../db/api');
const votespaceRouter = require('express').Router();

// get all topics
votespaceRouter.get('/topics', (req, res, next) => {
    topicAPI.getAllTopics().then((data) => {
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
})

// <--------------------------->


//adding topic to your model 
votespaceRouter.post('/add-topic', (req, res, next) => {
    const {
        name,
        description
    } = req.body
    topicAPI.findTopic(name, description)
        .then(topic => {
            if (topic) {
                res.status(400).send('Already have this topic')
            } else {
                // No user found
                topicAPI.createNewTopic({
                    name,
                    description
                })
                    .then(() => {
                        topicAPI.getAllTopics().then((data) => res.json(data))
                    })
                    .catch(error => {
                        console.log(error)
                        res.sendStatus(500)
                    })
            }
        })
})


// <--------------------------->

// deleting topic from your model 
votespaceRouter.post('/delete-topic', (req, res, next) => {
    const { id } = req.body;
    topicAPI.deleteTopic(id).then(() => {
        topicAPI.getAllTopics().then((data) => res.json(data))
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
})


// <--------------------------->
// Upvoting

votespaceRouter.post('/upvote', (req, res, next) => {
    const { id } = req.body
    topicAPI.upvote(id).then(() => {
        topicAPI.getAllTopics().then((data) => res.json(data))
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
})

// <--------------------------->
// Downvoting

votespaceRouter.post('/downvote', (req, res, next) => {
    const { id } = req.body
    topicAPI.downvote(id).then(() => {
        topicAPI.getAllTopics().then((data) => res.json(data))
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
})

module.exports = votespaceRouter; 
