import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import React, { Component } from "react";
import style from "../style";

export default class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/bg.png")}
        style={style.container}
      >
        <Text style={style.big_title}>Quizz</Text>
        <Text style={{ color: "black" }}>Username: </Text>

        <TextInput style={style.input} />
        <TouchableOpacity
          style={style.btn_settings}
          onPress={() => this.props.navigation.navigate("PartySettings")}
        >
          <Text style={{ color: "#ffcc66" }}>START !</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({});
