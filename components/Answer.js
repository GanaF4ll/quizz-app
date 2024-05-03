import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "../style";

const Answer = ({
  answers,
  onSelectAnswer,
  selectedAnswerIndex,
  handleValidation,
}) => {
  return (
    <View style={style.view_answer}>
      {answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[
            style.btn_answer,
            index === selectedAnswerIndex
              ? { backgroundColor: "#cc00cc" }
              : null,
          ]}
          onPress={() => onSelectAnswer(index)}
        >
          <Text>{answer}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[
          style.btn_validate,
          selectedAnswerIndex !== null ? style.validated : null,
        ]}
        disabled={selectedAnswerIndex === null}
        onPress={handleValidation}
      >
        <Text>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Answer;
