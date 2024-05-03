import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "../style";
import he from "he";

export default function Answer({
  answers,
  onSelectAnswer,
  selectedAnswerIndex, // Pass the index of selected answer
  setSelectedAnswer,
  handleValidation,
}) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    setShuffledAnswers(() => [...answers].sort(() => Math.random() - 0.5));
  }, [answers]);

  const handleAnswerSelection = (index) => {
    onSelectAnswer(index);
    setSelectedAnswer(index);
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
      <TouchableOpacity
        style={[
          style.btn_validate,
          selectedAnswerIndex === null && { opacity: 0.5 },
        ]}
        disabled={selectedAnswerIndex === null}
        onPress={handleValidation}
      >
        <Text>Valider</Text>
      </TouchableOpacity>
    </View>
  );
}
