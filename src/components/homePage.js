import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Home = () => {
  return (
    <div>
      <Container className="main" maxWidth="md">
        <h1>Welcome to the Trivia Challenge</h1>
        <h2>You will be presented with 10 True or false questions</h2>
        <h2>Can you score 100%?</h2>
        <Button
          className="begin-button"
          component={Link}
          to={process.env.PUBLIC_URL + "/quiz"}
          size="large"
          variant="contained"
        >
          Begin
        </Button>
      </Container>
    </div>
  );
};

export default Home;
