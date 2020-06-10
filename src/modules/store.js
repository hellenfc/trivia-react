import { createStore, applyMiddleware } from "redux";

// Logger with default options
import { createLogger } from "redux-logger";

import reducer from "./reducer";

const loggerMiddleware = createLogger();

export default function configureStore(initialState ) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(loggerMiddleware)
  );
  return store;
}
