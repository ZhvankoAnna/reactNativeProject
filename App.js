import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import bgImage from './assets/bgImage.png'

export default function App() {
  const [fontLoaded] = useFonts({
    "rb-reg": require("./assets/fonts/Roboto-Regular.ttf"),
    "rb-med": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <ImageBackground source={bgImage} style={styles.img}>
      <View style={styles.container}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column-reverse",
    fontFamily: 'rb-reg',
    fontSize: 16
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
