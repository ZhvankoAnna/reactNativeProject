import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
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
  Image,
} from "react-native";
import { register } from "../Redux/Auth/auth-operations";
import pickImage from "../utils/pickImage";
import uploadImage from "../utils/uploadImage";
import bgImage from "../assets/bgImage.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import FormInput from "../Components/FormInput";
import SubmitButton from "../Components/SubmitButton";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [image, setImage] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = async() => {
    const imageURL = await uploadImage(image);
    const data = {
      imageURL,
      login,
      email,
      password,
    };
    dispatch(register(data));
    setLogin("");
    setEmail("");
    setPassword("");
    setImage("");
    navigation.navigate("Home");
  };

  const handleShowPassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <ImageBackground source={bgImage} style={styles.img}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={{ ...styles.box, paddingBottom: isFocused ? 10 : 78 }}>
            <View style={styles.wrapper}>
              {!image ? (
                <TextInput style={styles.photoInput} editable={false} />
              ) : (
                <Image source={{ uri: image }} style={styles.photo} />
              )}
              <TouchableOpacity onPress={() => pickImage(setImage)} style={styles.icon}>
                <Ionicons
                  name="add-circle-outline"
                  size={25}
                  color={image ? "#E8E8E8" : "#FF6C00"}
                  style={image && styles.removeIcon}
                />
              </TouchableOpacity>
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
                  isFocused={isFocused}
                  setIsFocused={setIsFocused}
                />
                <FormInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  onChange={setEmail}
                  value={email}
                  isFocused={isFocused}
                  setIsFocused={setIsFocused}
                />
                <View>
                  <FormInput
                    style={styles.input}
                    placeholder="Пароль"
                    onChange={setPassword}
                    value={password}
                    secureTextEntry={hidePassword}
                    isFocused={isFocused}
                    setIsFocused={setIsFocused}
                  />
                  <TouchableOpacity
                    style={styles.hideBtn}
                    onPress={handleShowPassword}
                  >
                    <Text style={styles.hideText}>
                      {hidePassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <SubmitButton title="Зареєстуватися" onSubmit={handleSubmit} />
              </KeyboardAvoidingView>
            </View>
            <View style={styles.inner}>
              <Text style={styles.link}>Вже є акаунт? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.link}>Увійти</Text>
              </TouchableOpacity>
            </View>
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
    top: 76,
    right: -12,
  },
  removeIcon: {
    transform: [{ rotate: "45deg" }],
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 16,
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
  inner: {
    flexDirection: "row",
    justifyContent: "center",
  },
  link: {
    marginTop: 16,
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "rb-reg",
    fontSize: 16,
  },
});
