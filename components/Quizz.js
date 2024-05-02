import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Answer from "./Answer";
import he from "he";

import style from "../style";
import axios from "axios";

const Quizz = () => {
  const [questionData, setQuestionData] = useState(null);

  const url = "https://opentdb.com/api.php?amount=10";

  const fetchQuizz = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api.php?amount=10");
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
    ...questionData.incorrect_answers,
    questionData.correct_answer,
  ];

  // Mélanger les réponses
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

  return (
    <View style={style.container}>
      <Text style={style.title}>{he.decode(questionData.question)}</Text>

      <Answer answers={shuffledAnswers} />

      <TouchableOpacity
        style={style.btn_validate}
        // onPress={() => this.submit()}
      >
        <Text>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quizz;
