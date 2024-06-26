import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "../style";
import he from "he";

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
              ? {
                  backgroundColor: "#cc00cc",
                  borderWidth: 2,
                  borderColor: "#66ffff",
                }
              : null,
          ]}
          onPress={() => onSelectAnswer(index)}
        >
          <Text>{he.decode(answer)}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[
          style.btn_settings,
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
