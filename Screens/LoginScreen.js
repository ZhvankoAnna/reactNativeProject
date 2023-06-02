import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import bgImage from "../assets/bgImage.png";
import FormInput from "../Components/FormInput";
import SubmitButton from "../Components/SubmitButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground source={bgImage} style={styles.img}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.title}>Увійти</Text>
            <View>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <FormInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  onChange={setEmail}
                  value={email}
                />
              </KeyboardAvoidingView>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <FormInput
                  style={styles.input}
                  placeholder="Пароль"
                  onChange={setPassword}
                  value={password}
                />
              </KeyboardAvoidingView>
            </View>
            <SubmitButton title="Увійти" />
            <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column-reverse",
    fontFamily: "rb-reg",
    fontSize: 16,
  },
  box: {
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 144,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "rb-med",
    fontSize: 30,
    marginBottom: 32,
    textAlign: "center",
  },
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
  hideBtn: {
    position: "absolute",
    right: 16,
    bottom: 31,
  },
  hideText: {
    color: "#1B4371",
    fontFamily: "rb-reg",
    fontSize: 16,
  },
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
  link: {
    marginTop: 16,
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "rb-reg",
    fontSize: 16,
  },
});
