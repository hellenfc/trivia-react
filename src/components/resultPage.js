import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

const Result = () => {

  const answers = useSelector((state) => state.answerReducer);
  
 //clear data after play again
  function renderAnswers(){
    console.log('RESULT answers', answers)
    return answers.map((answer, i)=> {
      return(
        <div>
          <p>{answer.question}</p>
          <p>{answer.isCorrect ? "Correct answer" : "Incorrect answer"  }</p>
        </div>
      );
    })
  }
  return (
    <div>
      <h1>Result Page</h1>
      {renderAnswers()}
      <Button component={Link} to="/">
        PLAY AGAIN?
      </Button>
    </div>
  );
};

export default Result;
