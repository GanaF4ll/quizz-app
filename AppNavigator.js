import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import Quizz from "./components/Quizz";
import PartySettings from "./components/PartySettings";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PartySettings" component={PartySettings} />
        <Stack.Screen name="Quizz" component={Quizz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
