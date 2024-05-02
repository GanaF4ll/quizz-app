import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import style from "../style";

const Categories = (props) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api_category.php");
      setCategories(response.data.trivia_categories);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.log("Too many requests. Please try again later.");
      } else {
        console.log("error: ", error);
      }
    }
  };

  return (
    <View>
      <Text style={{ marginTop: 10, textAlign: "center" }}>
        Choisissez la catégorie
      </Text>
      <Picker
        style={style.dropdown}
        selectedValue={selectedCategory}
        onValueChange={(itemValue, itemIndex) => {
          // console.log("itemValue:", itemValue);
          // console.log("itemIndex:", itemIndex);
          setSelectedCategory(itemValue);
          props.setSelectedCategory(itemValue);
        }}
      >
        <Picker.Item label="any" value={null} />
        {categories.map((category) => (
          <Picker.Item
            key={category.id}
            label={category.name}
            value={category.id}
          />
        ))}
      </Picker>
    </View>
  );
};

export default Categories;
