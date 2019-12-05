import {
    ADD_TOPIC,
    GET_ALL_TOPICS,
    DELETE_TOPIC,
    UPVOTE,
    DOWNVOTE
} from '../actions/types'

const initialState = {
    allTopics: [],
}


const topicReducer = (state = initialState, action) => {
    const stateCopy = { ...state } // in case there is no action dispatched to reducer
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
        case DELETE_TOPIC:
            return {
                ...state,
                allTopics: action.payload
            }
        case UPVOTE:
            return {
                ...state,
                allTopics: action.payload
            }
        case DOWNVOTE:
            return {
                ...state,
                allTopics: action.payload
            }
        default:
            return stateCopy
    }
}

export default topicReducer; 