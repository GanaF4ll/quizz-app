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
    flexDirection: "column",
  },
  body: {
    height: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: "10%",
  },
  input: {
    borderColor: "#cc00cc",
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
    width: "45%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#cc00cc",
    borderWidth: 2,
  },
  btn_settings: {
    backgroundColor: "#cc00cc",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "#ffcc66",
  },

  color: "#66ffff",
  movieTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#66ffff",
  },
  dropdown: {
    width: 350,
    height: 200,
    borderColor: "#cc00cc",
    borderWidth: 2,
    borderRadius: 18,
  },
  view_answer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
