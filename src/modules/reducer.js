import { ADD_ANSWER, CLEAN_ANSWERS } from "./types";
import { combineReducers } from "redux";

const answerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return [...state, action.payload];
    case CLEAN_ANSWERS:
      return [];
    default:
      return state;
  }
}

const quizApp = combineReducers({
  answerReducer,
});

export default quizApp;
