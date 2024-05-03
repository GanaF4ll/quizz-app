import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "../style";
import he from "he";

export default function Answer({ answers, correctAnswer }) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerSelection = (index) => {
    setSelectedAnswerIndex(index);
    setIsCorrect(answers[index] === correctAnswer);
  };

  return (
    <View style={style.view_answer}>
      {answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[
            style.btn_answer,
            selectedAnswerIndex === index && { backgroundColor: "#cc00cc" },
          ]}
          onPress={() => handleAnswerSelection(index)}
        >
          <Text>{answer}</Text>
        </TouchableOpacity>
      ))}
      {isCorrect !== null && (
        <Text>{isCorrect ? "Correct answer!" : "Wrong answer!"}</Text>
      )}
    </View>
  );
}
