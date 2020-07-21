import React from "react";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { formatText } from "../util";

import { cleanAnswers } from "../modules/action";

const Result = () => {
  const answers = useSelector((state) => state.answerReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick() {
    dispatch(cleanAnswers());
    history.push("");
  }

  //clear data after play again
  function renderAnswers() {
    return answers.map((answer, i) => {
      return (
        <div className="answer-container">
          <div>
            {answer.isCorrect ? (
              <CheckCircleIcon className="check-icon" />
            ) : (
              <CancelIcon className="cancel-icon" />
            )}
          </div>
          <p>{formatText(answer.question)}</p>
        </div>
      );
    });
  }

  return (
    <Container className="result-container" maxWidth="md">
      <h1>Result Page</h1>
      {renderAnswers()}
      <Button
        size="large"
        variant="contained"
        onClick={() => handleClick()}
      >
        PLAY AGAIN?
      </Button>
    </Container>
  );
};

export default Result;
