import {
    ADD_TOPIC,
    ADD_TOPIC_FAILED,
    GET_ALL_TOPICS
} from '../actions/types'

const initialState = require('./initialState')

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOPIC:
            return {
                ...state,
                allTopics: action.payload
            }
        case GET_ALL_TOPICS:
            return {
                ...state,
                allTopics: action.payload
            }
    }
}

export default topicReducer; 