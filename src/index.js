import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';

// import * as serviceWorker from "./serviceWorker";
import { Provider as ReduxProvider } from "react-redux";
import Routes from "./Routes";

import { createStore } from "redux";
import quizApp from "./modules/reducer"

const store = createStore(quizApp);
ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);
