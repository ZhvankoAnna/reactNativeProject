import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function FormInput({
  placeholder = "",
  value,
  onChange,
  secureTextEntry = false,
  auth = true,
  location = false,
  isFocused,
  setIsFocused,
}) {

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
      style={[styles.input, isFocused ? styles.inputFocused : null, auth ? styles.authInput : styles.publicInput, location && styles.location]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    minWidth: "100%",
    height: 50,
    marginBottom: 16,
    paddingVertical: 16,
    fontFamily: "rb-reg",
    fontSize: 16,
  },
  authInput: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  publicInput: {
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  location: {
    paddingLeft: 28,
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
});
