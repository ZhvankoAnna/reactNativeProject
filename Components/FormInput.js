import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function FormInput({ placeholder = "", value, onChange, secureTextEntry = false }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      style={[styles.input, isFocused ? styles.inputFocused : null]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    minWidth: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontFamily: "rb-reg",
    fontSize: 16,
  },
  inputFocused: {
    borderColor: '#FF6C00'
  }
});
