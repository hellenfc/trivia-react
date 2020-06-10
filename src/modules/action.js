import { CREATE_ITEM } from "./types";

// actions
const createItem = (answer) => ({
  type: CREATE_ITEM,
  payload: answer,
});


export default {
  createItem,
};
