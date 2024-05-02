import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "../style";
import he from "he";

export default function Answer({ answers }) {
  return (
    <View style={style.view_answer}>
      {answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={style.btn_answer}
          // onPress={() => this.submit()}
        >
          <Text>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
