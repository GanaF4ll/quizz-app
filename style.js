import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
  },
  big_title: {
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: "#007ACC",
  },
  input: {
    borderColor: "#ffcc66",
    borderWidth: 1,
    width: 200,
    height: 40,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 18,
  },
  btn_answer: {
    backgroundColor: "#ffcc66",
    padding: 10,
    borderRadius: 5,
    margin: 2,
    width: "50%",
    height: "19%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_validate: {
    backgroundColor: "#66ff66",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btn_start: {
    backgroundColor: "#cc00cc",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  color: "#66ffff",
  movieTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#66ffff",
  },
});
