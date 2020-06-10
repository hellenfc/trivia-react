import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import * as serviceWorker from "./serviceWorker";
import { Provider as ReduxProvider } from "react-redux";
import Routes from "./Routes";
import configureStore from "./modules/store";

const reduxStore = configureStore();

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);
