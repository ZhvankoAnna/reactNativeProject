import { View } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [fontLoaded] = useFonts({
    "rb-reg": require("./assets/fonts/Roboto-Regular.ttf"),
    "rb-med": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
      <View>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </View>
  );
}
