import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Answer from "./Answer";
import he from "he";

import style from "../style";
import axios from "axios";

const Quizz = ({ route }) => {
  const { selectedCategoryId, selectedDifficulty } = route.params;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuizz = async () => {
      let url = "https://opentdb.com/api.php?amount=10";

      if (selectedCategoryId !== null) {
        url = url + "&category=" + selectedCategoryId;
      }

      if (selectedDifficulty === "Easy") {
        url = url + "&difficulty=easy";
      } else if (selectedDifficulty === "Medium") {
        url = url + "&difficulty=medium";
      } else if (selectedDifficulty === "Hard") {
        url = url + "&difficulty=hard";
      }

      try {
        const response = await axios.get(url);
        setQuestions(response.data.results);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.log("Too many requests. Please try again later.");
        } else {
          console.log("error: ", error);
        }
      }
    };

    fetchQuizz();
  }, [selectedCategoryId, selectedDifficulty]);

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
  };

  const handleValidation = () => {
    if (selectedAnswer === 1) {
      setScore(score + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);

    setSelectedAnswer(null);
  };

  if (questions.length === 0) {
    return <Text>Loading...</Text>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const answers = [
    ...currentQuestion.incorrect_answers.map((answer) => ({
      text: answer,
      value: 0,
    })),
    { text: currentQuestion.correct_answer, value: 1 },
  ];

  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

  return (
    <View style={style.container}>
      <Text style={style.title}>Score: {score}</Text>
      <Text style={style.title}>{he.decode(currentQuestion.question)}</Text>

      <Answer
        answers={shuffledAnswers}
        onSelectAnswer={handleAnswerSelection}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleValidation={handleValidation}
      />
    </View>
  );
};

export default Quizz;
