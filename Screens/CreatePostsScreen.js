import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import getLocation from "../utils/getLocation";
import uploadImage from "../utils/uploadImage";
import {db} from '../config';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import FormInput from "../Components/FormInput";
import SubmitButton from "../Components/SubmitButton";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CreatePostsScreen() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [coords, setCoords] = useState({});
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let disabled = true;
  const navigation = useNavigation();
  const {userId} = useSelector((state) => state.user)

  if (image && title && place) {
    disabled = false;
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.getCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
      const location = await getLocation();
      setCoords(location);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleSubmit = async () => {
    if (disabled) {
      return;
    }
    const photoURL = await uploadImage(image);
    const data = {
      title,
      photoURL,
      location: place,
      coords,
      userId,
    }
    await addDoc(collection(db, 'posts'), {
      title,
      photoURL,
      location: place,
      coords,
      userId,
      comments: [],
    })
    setImage("");
    setTitle("");
    setPlace("");
    navigation.navigate("PostsScreen");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <View style={styles.photoWrapper}>
              {!image ? (
                <Camera style={styles.camera} type={type} ref={setCameraRef}>
                  <TouchableOpacity
                    style={styles.wrapper}
                    onPress={async () => {
                      if (cameraRef) {
                        const { uri } = await cameraRef.takePictureAsync();
                        await MediaLibrary.createAssetAsync(uri);
                        setImage(uri);
                      }
                    }}
                  >
                    <View style={[styles.inner, styles.innerCamera]}>
                      <MaterialIcons
                        name="camera-alt"
                        size={24}
                        color="#bdbdbd"
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cameraFlip}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  >
                    <MaterialCommunityIcons
                      name="camera-flip-outline"
                      size={24}
                      color="#bdbdbd"
                    />
                  </TouchableOpacity>
                </Camera>
              ) : (
                <>
                  <Image source={{ uri: image }} style={styles.photo} />
                  <TouchableOpacity
                    style={styles.wrapper}
                    onPress={() => setImage("")}
                  >
                    <View style={[styles.inner, styles.innerPhoto]}>
                      <MaterialIcons
                        name="camera-alt"
                        size={24}
                        color="#ffffff"
                      />
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
            <Text style={styles.text}>
              {!image ? "Завантажте фото" : "Редагувати фото"}
            </Text>
          </View>
          <FormInput
            placeholder="Назва"
            value={title}
            onChange={setTitle}
            auth={false}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
          />
          <View style={styles.locationWrapper}>
            <FormInput
              placeholder="Місцевість"
              value={place}
              onChange={setPlace}
              auth={false}
              location={true}
              isFocused={isFocused}
              setIsFocused={setIsFocused}
            />
            <Feather
              name="map-pin"
              size={24}
              color="#bdbdbd"
              style={styles.locationIcon}
            />
          </View>
          <SubmitButton
            title="Опублікувати"
            onSubmit={handleSubmit}
            disabled={disabled}
          />
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
  camera: {
    width: "100%",
    height: 240,
    marginBottom: 8,
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
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  wrapper: {
    position: "absolute",
    top: 90,
    left: "40%",
  },
  inner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    // transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  innerCamera: {
    backgroundColor: "#ffffff",
  },
  innerPhoto: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  cameraFlip: {
    position: "absolute",
    right: 8,
    bottom: 8,
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
