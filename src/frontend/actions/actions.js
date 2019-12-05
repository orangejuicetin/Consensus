import axios from 'axios'
import {
    ADD_TOPIC,
    GET_ALL_TOPICS,
    DELETE_TOPIC,
    UPVOTE,
    DOWNVOTE
} from './types'

export const addTopic = (name, description) => {
    return dispatch => {
        axios.post('/votespace/add-topic', { name: name, description: description })
            .then(({ data: topicList }) => {
                dispatch({
                    type: ADD_TOPIC,
                    payload: topicList
                });
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const getTopics = () => {
    return dispatch => {
        axios.get('/votespace/topics')
            .then(({ data: topicList }) => {
                dispatch({
                    type: GET_ALL_TOPICS,
                    payload: topicList
                });
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const deleteTopic = (id) => {
    return dispatch => {
        axios.post('/votespace/delete-topic', { id: id })
            .then(({ data: topicList }) => {
                dispatch({
                    type: DELETE_TOPIC,
                    payload: topicList
                });
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const upVote = (id) => {
    return dispatch => {
        axios.post('/votespace/upvote', { id: id })
            .then(({ data: topicList }) => {
                dispatch({
                    type: UPVOTE,
                    payload: topicList
                });
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export const downVote = (id) => {
    return dispatch => {
        axios.post('/votespace/downvote', { id: id })
            .then(({ data: topicList }) => {
                dispatch({
                    type: DOWNVOTE,
                    payload: topicList
                });
            })
            .catch(error => {
                console.log(error)
            });
    }
}
