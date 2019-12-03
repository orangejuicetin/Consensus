const { topicAPI, cardAPI } = require('../../../db/api');
const votespaceRouter = require('express').Router();

// get all topics
votespaceRouter.get('/topics', (req, res, next) => {
    topicAPI.getAllTopics().then((data) => res.send(data))
})

//adding topic to your model 
votespaceRouter.post('/add-topic', (req, res, next) => {
    const {
        name,
        description
    } = req.body
    topicAPI.findTopic(name, description)
        .then(topic => {
            if (topic) {
                //TODO: You already this card
                res.redirect('/votespace')
            } else {
                // No user found
                topicAPI.createNewTopic({
                    name,
                    description
                })
                    .then(() => {
                        console.log('successfully created new topic')
                        topicAPI.getAllTopics().then((data) => res.json(data))
                    })
                    .catch(error => {
                        console.log(error)
                        res.sendStatus(500)
                    })
            }
        })
})

votespaceRouter.post('/add-card', (req, res, next) => {
    const {
        title,
        description
    } = req.body
    cardAPI.findCard(title, description)
        .then(card => {
            if (card) {
                //TODO: You already this card
                res.redirect('/votespace')
            } else {
                // No user found
                cardAPI.createNewCard({
                    title,
                    description
                })
                    .then(() => {
                        console.log('successfully created new Card')
                        res.redirect('/votespace')
                    })
                    .catch(error => {
                        console.log(error)
                        res.sendStatus(500)
                    })
            }
        })
})

module.exports = votespaceRouter; 
