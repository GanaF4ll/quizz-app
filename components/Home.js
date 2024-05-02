import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import style from "../style";

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={style.title}>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
