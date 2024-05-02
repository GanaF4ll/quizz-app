import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import React, { Component } from "react";
import style from "../style";

export default class Home extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.big_title}>Quizz</Text>
        <Text style={{ color: "black" }}>Username: </Text>

        <TextInput style={style.input} />
        <TouchableOpacity
          style={style.btn_start}
          onPress={() => this.props.navigation.navigate("PartySettings")}
        >
          <Text style={{ color: "white" }}>START !</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
