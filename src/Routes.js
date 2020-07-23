import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/homePage";
import Quiz from "./components/quizPage";
import Result from "./components/resultPage";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={Home}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/quiz"}
            component={Quiz}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/result"}
            component={Result}
          ></Route>
        </Switch>
      </Router>
    );
  }
}
