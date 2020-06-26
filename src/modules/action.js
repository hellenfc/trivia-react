import { ADD_ANSWER, CLEAN_ANSWERS } from "./types";

// actions
const addAnswer = (answer) => {
  return {
    type: ADD_ANSWER,
    payload: answer,
  };
};

const cleanAnswers = () => {
  return {
    type: CLEAN_ANSWERS,
  };
};

export { addAnswer, cleanAnswers, };
