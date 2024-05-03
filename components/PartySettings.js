import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import style from "../style";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import Categories from "./Categories";

const PartySettings = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPickerVisible, setPickerVisible] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={style.container}
    >
      <View style={style.body}>
        <Text>Choose the difficulty</Text>
        <Picker
          style={style.dropdown}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedLanguage(itemValue);
            setPickerVisible(false);
          }}
        >
          <Picker.Item label="..." value="..." />
          <Picker.Item label="Easy" value="Easy" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Hard" value="Hard" />
        </Picker>
        <Categories setSelectedCategory={setSelectedCategory} />
      </View>
      <View style={style.footer}>
        <TouchableOpacity
          style={style.btn_settings}
          onPress={() =>
            navigation.navigate("Quizz", {
              selectedCategoryId: selectedCategory,
              selectedDifficulty: selectedLanguage,
            })
          }
          // disabled={!selectedLanguage}
        >
          <AntDesign
            name="arrowright"
            size={24}
            color="#ffcc66"
            // color={selectedLanguage ? "black" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default PartySettings;
