import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "../style";
import he from "he";

export default function Answer({ answers, onSelectAnswer }) {
  const [shuffledAnswers, setShuffledAnswers] = useState(() => {
    return [...answers].sort(() => Math.random() - 0.5);
  });

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const handleAnswerSelection = (index) => {
    setSelectedAnswerIndex(index);
    onSelectAnswer(index);
    if (shuffledAnswers[index].value === 1) {
      console.log("La réponse est correcte !");
    } else {
      console.log("La réponse est incorrecte.");
    }
  };

  return (
    <View style={style.view_answer}>
      {shuffledAnswers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[
            style.btn_answer,
            index === selectedAnswerIndex
              ? { backgroundColor: "#cc00cc" }
              : null,
          ]}
          onPress={() => handleAnswerSelection(index)}
        >
          <Text>{answer.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
