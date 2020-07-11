import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './App.js'
// import * as serviceWorker from "./serviceWorker";
import { Provider as ReduxProvider } from "react-redux";


import { createStore } from "redux";
import quizApp from "./modules/reducer"

const store = createStore(quizApp);
ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
     <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);
