import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import CommentsScreen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";

const MainStack = createStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    "rb-reg": require("./assets/fonts/Roboto-Regular.ttf"),
    "rb-med": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            title: "Коментарі",
            headerTitleStyle: {
              fontFamily: "rb-med",
            },
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
            },
          }}
        />
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: "Локація",
            headerTitleStyle: {
              fontFamily: "rb-med",
            },
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
