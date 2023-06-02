import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import bgImage from "../assets/bgImage.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import FormInput from "../Components/FormInput";
import SubmitButton from "../Components/SubmitButton";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground source={bgImage} style={styles.img}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.wrapper}>
              <TextInput style={styles.photoInput} />
              <Ionicons
                name="add-circle-outline"
                size={25}
                color="#FF6C00"
                style={styles.icon}
              />
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <FormInput
                  style={styles.input}
                  placeholder="Логін"
                  onChange={setLogin}
                  value={login}
                />
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
                  />
                  <TouchableOpacity style={styles.hideBtn}>
                    <Text style={styles.hideText}>Показати</Text>
                  </TouchableOpacity>
                </View>
                <SubmitButton title="Зареєстуватися" />
              </KeyboardAvoidingView>
            </View>
            <Text style={styles.link}>Вже є акаунт? Увійти</Text>
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
    backgroundColor: "#ffffff",
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    position: "absolute",
    top: -60,
    left: 128,
  },
  photoInput: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    top: 81,
    right: -12,
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
