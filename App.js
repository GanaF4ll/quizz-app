import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home.js";
import style from "./style";
import Quizz from "./components/Quizz.js";

function HomeScreen() {
  return (
    <View style={style.container}>
      <Home />
    </View>
  );
}
function QuizzScreen() {
  return (
    <View style={style.container}>
      <Quizz />
    </View>
  );
}

export default function App() {
  return <View style={styles.container}>{QuizzScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
