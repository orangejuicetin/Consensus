import axios from 'axios'
import {
    UPVOTE,
    DOWNVOTE,
    LOGIN
} from './types'

const login = () => {
    return dispatch => {
        axios.post('/login', { username, password }).then(dispatch({ type: LOGIN }))
    };
}

const upvote = () => {
    return dispatch => {
        axios
            .post('/', { vote: null })
    };
}
