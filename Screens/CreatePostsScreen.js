import { Text, View, StyleSheet } from "react-native";

export default function CreatePostsScreen() {
    return (
        <View style={styles.container}>
            <Text>CreatePostsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      fontFamily: "rb-reg",
      fontSize: 16,
      backgroundColor: "#ffffff",
    },
  });