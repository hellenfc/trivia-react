import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Home = () => {
  return (
    <div className="root">
      <Container className="main" maxWidth="md">
        <h1>Welcome to the Trivia Challenge</h1>
        <h2>You will be presented with 10 True or false questions</h2>
        <h2>Can you score 100%?</h2>
        <Button
          component={Link}
          to="/quiz"
          size="large"
          variant="contained"
          color="primary"
        >
          Begin
        </Button>
      </Container>
      <footer className="footer">
        <Container maxWidth="md">
          <p>React Trivia</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
