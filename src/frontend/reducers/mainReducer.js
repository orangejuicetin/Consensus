import { combineReducers } from "redux";
import topicReducer from './topicReducer'
import cardReducer from './cardReducer'

// const mainReducer = combineReducers(
//     {
//         topic: topicReducer,
//         card: cardReducer
//     }
// )

const mainReducer = topicReducer;

export default mainReducer; 