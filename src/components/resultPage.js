import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

const Result = () => {

  const answers = useSelector((state) => state.answerReducer);

  function renderAnswers(){
    console.log('answers', answers)
    return answers.map((answer, i)=> {
      console.log('answer', answer)
      return(
        <div>
          <p>{answer.question}</p>
          <p>{answer.isCorrect ? "Correct answer" : "Incorrect answer"  }</p>
        </div>
      );
    })
  }
  console.log('Soy Result')
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
