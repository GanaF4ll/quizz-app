import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Answer from "./Answer";
import he from "he";

import style from "../style";
import axios from "axios";

const Quizz = ({ route }) => {
  const { selectedCategoryId, selectedDifficulty } = route.params;
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

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

  const fetchQuizz = async () => {
    try {
      const response = await axios.get(url);
      return response.data.results[0];
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.log("Too many requests. Please try again later.");
      } else {
        console.log("error: ", error);
      }
    }
  };

  useEffect(() => {
    fetchQuizz().then((data) => setQuestionData(data));
  }, []);

  if (!questionData) {
    return <Text>Loading...</Text>;
  }

  const answers = [
    ...questionData.incorrect_answers.map((answer) => ({
      text: answer,
      value: 0,
    })),
    { text: questionData.correct_answer, value: 1 },
  ];

  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
  };

  const correctAnswerIndex = shuffledAnswers.findIndex(
    (answer) => answer.value === 1
  );

  const handleValidation = () => {
    if (selectedAnswer === 1) {
      // Augmenter le score
      setScore(score + 1);
    }
  };
  const isAnswerSelected = selectedAnswer !== null;

  return (
    <View style={style.container}>
      <Text style={style.title}>Score: {score}</Text>
      <Text style={style.title}>{he.decode(questionData.question)}</Text>

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
