import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SubmitButton({ title, onSubmit, disabled = false }) {
  return (
    <TouchableOpacity
      style={[styles.btn, disabled ? styles.disabledBtn : styles.enabledBtn]}
      onPress={onSubmit}
    >
      <Text
        style={[
          styles.btnText,
          disabled ? styles.disabledBtnText : styles.enabledBtnText,
        ]}
      >
        {title}
      </Text>
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
  },
  enabledBtn: {
    backgroundColor: "#FF6C00",
  },
  disabledBtn: {
    backgroundColor: "#F6F6F6",
  },
  btnText: {
    textAlign: "center",
    fontFamily: "rb-reg",
    fontSize: 16,
  },
  enabledBtnText: {
    color: "#ffffff",
  },
  disabledBtnText: {
    color: "#BDBDBD",
  },
});
