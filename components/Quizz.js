import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Answer from "./Answer";

import style from "../style";
import axios from "axios";

const Quizz = () => {
  const [questionData, setQuestionData] = useState(null);

  const fetchQuizz = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api.php?amount=10");
      return response.data.results[0];
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchQuizz().then((data) => setQuestionData(data));
  }, []);

  if (!questionData) {
    return <Text>Loading...</Text>;
  }

  const answers = [
    ...questionData.incorrect_answers,
    questionData.correct_answer,
  ];

  // Mélanger les réponses
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

  return (
    <View style={style.container}>
      <Text style={style.title}>{questionData.question}</Text>
      <Answer answers={shuffledAnswers} />
    </View>
  );
};

export default Quizz;
