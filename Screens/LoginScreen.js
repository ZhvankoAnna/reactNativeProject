import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
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
                <View>
                <FormInput
                  style={styles.input}
                  placeholder="Пароль"
                  onChange={setPassword}
                  value={password}
                  secureTextEntry={true}
                />
                <TouchableOpacity style={styles.hideBtn}>
                  <Text style={styles.hideText}>Показати</Text>
                </TouchableOpacity>
                </View>
                <SubmitButton title="Увійти" />
              </KeyboardAvoidingView>
            </View>
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
  hideBtn: {
    position: "absolute",
    top: 14,
    right: 16,
  },
  hideText: {
    color: "#1B4371",
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
