import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

import { addAnswer } from "../modules/action";

const Quiz = () => {
  const [questionCount, setQuesionCount] = useState(0);
  const [hasError, setErrors] = useState(false);
  const [questions, setQuesions] = useState([]);

  const history = useHistory();
  
  const dispatch = useDispatch();

  async function fetchData() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );
    res
      .json()
      .then((res) => setQuesions(res.results))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function saveResult(value) {
    const correctAnswer = questions[questionCount].correct_answer.toLowerCase();
    let parsedCorrectAnswer = JSON.parse(correctAnswer);
    let isCorrect = parsedCorrectAnswer === value ? true : false;
    let answer = {
      number: questionCount,
      question: questions[questionCount].question,
      isCorrect,
    };

    dispatch(addAnswer(answer));
  }

  function handleClick(value) {
    saveResult(value);
    setQuesionCount(questionCount + 1);
    if (questionCount === questions.length - 1) {
      history.push("result");
    }
  }

  return (
    <div>
      <h1>Quiz Page</h1>
      {questions.length === 0  ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <p>
            {questions[questionCount] ? questions[questionCount].question : ""}
          </p>
          <Button onClick={() => handleClick(true)}>True</Button>
          <Button onClick={() => handleClick(false)}>False</Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
