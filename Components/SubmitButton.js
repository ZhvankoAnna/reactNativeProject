import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SubmitButton({ title, onSubmit }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onSubmit}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    minWidth: "100%",
    height: 51,
    marginTop: 27,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "rb-reg",
    fontSize: 16,
  },
});
