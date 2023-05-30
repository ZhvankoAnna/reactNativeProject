import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RegistrationScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
          <TextInput style={styles.input} placeholder="Пароль" />
          <TouchableOpacity style={styles.hideBtn}>
            <Text style={styles.hideText}>Показати</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Зареєстуватися</Text>
        </TouchableOpacity>
        <Text style={styles.link}>Вже є акаунт? Увійти</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
