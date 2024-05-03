import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import style from "../style";

export default class Home extends Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (text) => {
    this.setState({ inputValue: text });
  };

  navigateToPartySettings = (score) => {
    this.props.navigation.navigate("PartySettings", {
      inputValue: this.state.inputValue,
      score: score,
    });
  };

  render() {
    const { score } = this.props.route.params || {};

    return (
      <ImageBackground
        source={require("../assets/bg.png")}
        style={style.container}
      >
        <Text style={style.big_title}>Quizz</Text>
        {score && <Text>Your score: {score}</Text>}
        <Text style={{ color: "black" }}>Username: </Text>

        <TextInput
          style={style.input}
          onChangeText={this.handleInputChange}
          value={this.state.inputValue}
        />

        <TouchableOpacity
          style={style.btn_settings}
          onPress={() => this.navigateToPartySettings()}
        >
          <Text style={{ color: "#ffcc66" }}>START !</Text>
        </TouchableOpacity>

        {score && (
          <TouchableOpacity
            style={style.btn_settings}
            onPress={() => this.navigateToPartySettings(score)}
          >
            <Text style={{ color: "#ffcc66" }}>Continue</Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({});
