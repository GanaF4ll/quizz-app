import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import Answer from "./Answer";
import axios from "axios";
import style from "../style";
import he from "he";
import { AntDesign } from "@expo/vector-icons";

const Quizz = ({ route, navigation }) => {
  const { selectedCategoryId, selectedDifficulty } = route.params;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuizz = async () => {
      let url = `https://opentdb.com/api.php?amount=50&type=multiple`;

      if (selectedCategoryId !== null) {
        url += `&category=${selectedCategoryId}`;
      }

      if (selectedDifficulty) {
        url += `&difficulty=${selectedDifficulty.toLowerCase()}`;
      }

      try {
        const response = await axios.get(url);
        if (response.data.results && response.data.results.length > 0) {
          setQuestions(
            response.data.results.map((question) => ({
              question: question.question,
              answers: [...question.incorrect_answers, question.correct_answer],
              correctIndex: question.incorrect_answers.length,
            }))
          );
        } else {
          console.log("No questions found in the response.");
        }
      } catch (error) {
        console.log("Error fetching questions: ", error);
      }
    };

    fetchQuizz();
  }, [selectedCategoryId, selectedDifficulty]);

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
  };

  const handleValidation = () => {
    const correctAnswerIndex = questions[currentQuestionIndex].correctIndex;

    if (selectedAnswer === correctAnswerIndex) {
      setScore(score + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
  };

  if (questions.length === 0) {
    return <Text>Loading...</Text>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answers = currentQuestion.answers;

  return (
    // <View style={style.container}>
    //   <TouchableOpacity
    //     style={style.btn_start}
    //     onPress={() => navigation.navigate("Home")}
    //   >
    //     <AntDesign name="home" size={24} color="black" />
    //   </TouchableOpacity>
    //   <Text style={style.title}>Score: {score}</Text>
    //   <Text style={style.title}>{he.decode(currentQuestion.question)}</Text>
    //   <Answer
    //     answers={answers}
    //     onSelectAnswer={handleAnswerSelection}
    //     selectedAnswerIndex={selectedAnswer}
    //     handleValidation={handleValidation}
    //   />
    // </View>
    <ImageBackground
      source={require("../assets/bg.png")}
      style={style.container}
    >
      <View style={style.header}>
        <TouchableOpacity
          style={style.btn_settings}
          onPress={() => navigation.navigate("Home", { score: score })}
        >
          <AntDesign name="home" size={24} color="#ffcc66" />
        </TouchableOpacity>
      </View>

      <View style={style.body}>
        <Text style={style.title}>Score: {score}</Text>
        <Text style={style.title}>{he.decode(currentQuestion.question)}</Text>
        <Answer
          answers={answers}
          onSelectAnswer={handleAnswerSelection}
          selectedAnswerIndex={selectedAnswer}
          handleValidation={handleValidation}
        />
      </View>
    </ImageBackground>
  );
};

export default Quizz;
