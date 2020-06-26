import React from "react";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { cleanAnswers } from "../modules/action";

const Result = () => {
  const answers = useSelector((state) => state.answerReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick(){
    dispatch(cleanAnswers());
    history.push('')
  }

 //clear data after play again
  function renderAnswers(){
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
      <Button onClick={() => handleClick()}>
        PLAY AGAIN?
      </Button>
    </div>
  );
};

export default Result;
