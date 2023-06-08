import { Text, View, StyleSheet } from "react-native";

export default function CommentsScreen() {
    return (
        <View style={styles.container}>
            <Text>CommentsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 32,
      fontFamily: "rb-reg",
      fontSize: 16,
      backgroundColor: "#ffffff",
    }
})