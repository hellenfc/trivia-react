import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Routes from "./Routes";

import Container from "@material-ui/core/Container";

class App extends Component {
  render() {
    return (
      <div className="root">
        <Routes />
        <footer className="footer">
          <Container maxWidth="md">
            <p>React Trivia</p>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
