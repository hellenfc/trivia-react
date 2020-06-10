import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Trivia Challenge</h1>
      <h2>You will be presented with 10 True or false questions</h2>
      <h2>Can you score 100%?</h2>
      <Button component={Link} to="/quiz" >Begin</Button>
    </div>
  );
};

export default Home;
