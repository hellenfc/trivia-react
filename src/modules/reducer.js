
import { CREATE_ITEM } from "./types";

const defaultState = {
  items: [],
};

const answerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_ITEM: {
      console.log("action", action);
      console.log("state", state);
      return { ...state, answer: action.payload };
      
    }

    default:
      return state;
  }
};

export default answerReducer;
