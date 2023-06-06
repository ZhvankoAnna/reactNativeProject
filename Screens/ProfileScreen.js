import { Text, View, ImageBackground, StyleSheet } from "react-native";

import bgImage from "../assets/bgImage.png";

export default function ProfileScreen() {
  return (
    <ImageBackground source={bgImage} style={styles.img}>
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        fontFamily: "rb-reg",
        fontSize: 16,
      },
      img: {
        width: "100%",
        height: "100%",
      },
})