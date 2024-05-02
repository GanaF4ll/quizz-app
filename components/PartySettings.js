import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "../style";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import Categories from "./Categories";

const PartySettings = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPickerVisible, setPickerVisible] = useState(false);

  return (
    <View style={style.container}>
      <View style={style.body}>
        <Text>Choisissez la difficulté</Text>
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
          style={style.btn_validate}
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
            color="black"
            // color={selectedLanguage ? "black" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PartySettings;
