import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/homePage";
import Quiz from "./components/quizPage";
import Result from "./components/resultPage";

export default class Routes extends Component {
  render() {
    return (
      <Router basename="/trivia-react">
        <Switch>
          <Route
            exact
            path={"/"}
            component={Home}
          ></Route>
          <Route
            path={"/quiz"}
            component={Quiz}
          ></Route>
          <Route
            path={"/result"}
            component={Result}
          ></Route>
        </Switch>
      </Router>
    );
  }
}
