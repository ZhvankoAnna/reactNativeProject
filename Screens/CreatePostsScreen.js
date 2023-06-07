import { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import FormInput from "../Components/FormInput";
import SubmitButton from "../Components/SubmitButton";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function CreatePostsScreen() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  let disabled = true;

  if(image && title && place) {
    disabled = false;
  }

  const handleSubmit = () => {

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <View style={styles.photoWrapper}>
              {!image ? (
                <TextInput editable={false} style={styles.photoInput} />
              ) : (
                <Image source={{ uri: image }} style={styles.photo} />
              )}
              <TouchableOpacity style={styles.wrapper}>
                <View style={styles.inner}>
                  <MaterialIcons name="camera-alt" size={24} color="#bdbdbd" />
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>Завантажте фото</Text>
          </View>
          <FormInput placeholder="Назва" value={title} onChange={setTitle} auth={false} />
          <View style={styles.locationWrapper}>
            <FormInput placeholder="Місцевість" value={place} onChange={setPlace} auth={false} location={true} />
            <Feather
              name="map-pin"
              size={24}
              color="#bdbdbd"
              style={styles.locationIcon}
            />
          </View>
          <SubmitButton title='Опублікувати' onSubmit={handleSubmit} disabled={disabled} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    fontFamily: "rb-reg",
    fontSize: 16,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  photoWrapper: {
    position: "relative",
  },
  photoInput: {
    minWidth: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    fontFamily: "rb-reg",
    fontSize: 16,
  },
  photo: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  inner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  text: {
    fontFamily: "rb-reg",
    fontSize: 16,
    color: "#bdbdbd",
    marginBottom: 32,
  },
  locationWrapper: {
    position: "relative",
  },
  locationIcon: {
    position: "absolute",
    top: 13,
  },
});
