import {
    ADD_TOPIC,
    GET_ALL_TOPICS,
    DELETE_TOPIC
} from '../actions/types'

const initialState = {
    allTopics: []
}


const topicReducer = (state = initialState, action) => {
    const stateCopy = { ...state }
    // stateCopy.allTopics = state.allTopics.slice()
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
        default:
            return stateCopy
    }
}

export default topicReducer; 