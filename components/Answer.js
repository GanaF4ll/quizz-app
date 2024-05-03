import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "../style";
import he from "he";

export default function Answer({
  answers,
  onSelectAnswer,
  selectedAnswer,
  setSelectedAnswer,
  handleValidation,
}) {
  const [shuffledAnswers, setShuffledAnswers] = useState(() => {
    return [...answers].sort(() => Math.random() - 0.5);
  });

  const handleAnswerSelection = (index) => {
    onSelectAnswer(index);
    if (shuffledAnswers[index].value === 1) {
      console.log("La réponse est correcte !");
    } else {
      console.log("La réponse est incorrecte.");
    }
    setSelectedAnswer(index);
  };

  return (
    <View style={style.view_answer}>
      {shuffledAnswers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[
            style.btn_answer,
            index === selectedAnswer ? { backgroundColor: "#cc00cc" } : null,
          ]}
          onPress={() => handleAnswerSelection(index)}
        >
          <Text>{answer.text}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[
          style.btn_validate,
          selectedAnswer === null && { opacity: 0.5 },
        ]}
        disabled={selectedAnswer === null}
        onPress={handleValidation}
      >
        <Text>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}
