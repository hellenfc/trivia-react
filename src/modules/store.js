import { createStore, applyMiddleware } from "redux";

// Logger with default options
import { createLogger } from "redux-logger";

import quizApp from "./reducer";

const loggerMiddleware = createLogger();


export default function configureStore(initialState) {
  return createStore(quizApp, initialState, applyMiddleware(loggerMiddleware));
}