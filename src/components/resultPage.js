import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Result = () => {
  console.log('Soy Result')
  return (
    <div>
      <h1>Result Page</h1>

      
      <Button component={Link} to="/">
        PLAY AGAIN?
      </Button>
    </div>
  );
};

export default Result;
