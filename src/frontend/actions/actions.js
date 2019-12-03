import axios from 'axios'
import {
    // UPVOTE,
    // DOWNVOTE,
    ADD_TOPIC,
    GET_ALL_TOPICS
    // LOGIN 
} from './types'

// const login = () => {
//     return dispatch => {
//         axios.post('/login', { username, password }).then(dispatch({ type: LOGIN }))
//     };
// }

// const upvote = () => {
//     return dispatch => {
//         axios
//             .post('/', { vote: null })
//     };
// }

export const addTopic = (name, description) => {
    return dispatch => {
        axios.post('/votespace/add-topic', { name: name, description: description })
            .then(({ topics }) => {
                dispatch({
                    type: ADD_TOPIC,
                    payload: topics
                });
            })
            .catch(error => {
                dispatch({
                    type: ADD_TOPIC_FAILED,
                    error
                });
            });
    }
}

export const getTopics = () => {
    return dispatch => {
        axios.get('/topics')
            .then(({ topics }) => {
                dispatch({
                    type: GET_ALL_TOPICS,
                    payload: topics
                });
            })
            .catch(error => {
                dispatch({
                    type: GET_ALL_TOPICS_FAILED,
                    error
                });
            });
    }
}
