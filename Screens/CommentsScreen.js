import {
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Sc
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CommentsScreen({ route }) {
  const { photoURL, comments } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: photoURL }} style={styles.postPhoto} />
      </View>
      <View>
        <TextInput placeholder="Коментувати..." style={styles.input} />
        <TouchableOpacity style={styles.iconWrapper}>
          <AntDesign name="arrowup" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  postPhoto: {
    width: "100%",
    height: 240,
  },
  input: {
    minWidth: "100%",
    height: 50,
    padding: 16,
    fontFamily: "rb-reg",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 100,
  },
  iconWrapper: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    position: "absolute",
    top: 8,
    right: 8,
  },
});
