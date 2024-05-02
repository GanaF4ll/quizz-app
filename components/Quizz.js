import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Answer from "./Answer";
import he from "he";

import style from "../style";
import axios from "axios";

const Quizz = ({ route }) => {
  const { selectedCategoryId, selectedDifficulty } = route.params;
  const [questionData, setQuestionData] = useState(null);
  let url = "https://opentdb.com/api.php?amount=10";

  console.log("selectedCategoryId:", selectedCategoryId);

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
  console.log(url);

  console.log("selectedCategoryId:", route.params.selectedCategoryId);

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
    ...questionData.incorrect_answers,
    questionData.correct_answer,
  ];

  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

  return (
    <View style={style.container}>
      <Text style={style.title}>{he.decode(questionData.question)}</Text>

      <Answer answers={shuffledAnswers} />

      <TouchableOpacity style={style.btn_validate}>
        <Text>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quizz;
