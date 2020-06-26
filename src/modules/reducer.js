import { ADD_ANSWER } from "./types";
import { combineReducers } from "redux";

const answerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return [...state,  action.payload]
    default:
      return state;
  }
}

const quizApp = combineReducers({
  answerReducer,
});

export default quizApp;
