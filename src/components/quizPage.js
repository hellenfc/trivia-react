import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addAnswer } from "../modules/action";

const Quiz = () => {
  const [questionCount, setQuesionCount] = useState(0);
  
  const history = useHistory();
  const dataJSON = {
    response_code: 0,
    results: [
      {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "The retail disc of Tony Hawks Pro Skater 5 only comes with the tutorial.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "History",
        type: "boolean",
        difficulty: "hard",
        question: "Japan was part of the Allied Powers during World War I.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "History",
        type: "boolean",
        difficulty: "hard",
        question:
          "Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "In Undertale, having a &quot;Fun Value&quot; set to 56-57 will play the &quot;Wrong Number Song Call&quot;.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Entertainment: Music",
        type: "boolean",
        difficulty: "hard",
        question:
          "The song &quot;Mystery Train&quot; was released by artist &quot;Little Junior&#039;s Blue Flames&quot; in 1953.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "History",
        type: "boolean",
        difficulty: "hard",
        question: "The Battle of Trafalgar took place on October 23rd, 1805",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "History",
        type: "boolean",
        difficulty: "hard",
        question:
          "During the Winter War, the amount of Soviet Union soliders that died or went missing was five times more than Finland&#039;s.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Entertainment: Japanese Anime & Manga",
        type: "boolean",
        difficulty: "hard",
        question:
          "In the &quot;Kagerou Daze&quot; series, Shintaro Kisaragi is prominently shown with the color red.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        category: "Entertainment: Music",
        type: "boolean",
        difficulty: "hard",
        question:
          "The singer Billie Holiday was also known as &quot;Lady Day&quot;.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
    ],
  };

  const dispatch = useDispatch();

    function saveResult(value) {
    const correctAnswer = dataJSON.results[
      questionCount
    ].correct_answer.toLowerCase();
    let parsedCorrectAnswer = JSON.parse(correctAnswer);
    let isCorrect = parsedCorrectAnswer === value ? true : false;
    let answer = {
      number: questionCount,
      question: dataJSON.results[questionCount].question,
      isCorrect,
    };

    dispatch(addAnswer(answer));
  }

  function handleClick(value) {
    saveResult(value);
    setQuesionCount(questionCount + 1);
    if (questionCount === dataJSON.results.length - 1) {
      history.push("result");
    }
  }

  return (
    <div>
      <h1>Quiz Page</h1>
      <p>{dataJSON.results[questionCount].question}</p>
      <Button onClick={() => handleClick(true)}>True</Button>
      <Button onClick={() => handleClick(false)}>False</Button>
    </div>
  );
};

export default Quiz;
