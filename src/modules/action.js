import { ADD_ANSWER } from "./types";

// actions
const addAnswer = (answer) => {
  return {
    type: ADD_ANSWER,
    payload: answer,
  };
};

export {
  addAnswer,
};
