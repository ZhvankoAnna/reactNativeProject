import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

const image = {
  uri: "https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg",
};

export default function App() {
  const [fontLoaded] = useFonts({
    "rb-reg": require("./assets/fonts/Roboto-Regular.ttf"),
    "rb-med": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <ImageBackground source={image} style={styles.img}>
      <View style={styles.container}>
        {/* <RegistrationScreen /> */}
        <LoginScreen />
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
