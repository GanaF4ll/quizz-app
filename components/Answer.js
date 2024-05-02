import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "../style";

export default function Answer({ answers }) {
  return (
    <View>
      {answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={style.button}
          // onPress={() => this.submit()}
        >
          <Text>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
