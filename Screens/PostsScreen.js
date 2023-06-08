import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function PostsScreen() {
  const navigation = useNavigation();

  const handleCommentsPress = () => {
    navigation.navigate("CommentsScreen");
  };

  const handlePlacePress = () => {
    navigation.navigate("MapScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoWrapper}>
        <TextInput style={styles.userPhotoInput} editable={false} />
        {/* <Image source={{ uri: image }} style={styles.photo} /> */}
        <View style={styles.userTextBox}>
          <Text style={styles.userTitle}>Natali Romanova</Text>
          <Text style={styles.userText}>email@example.com</Text>
        </View>
      </View>
      <TextInput style={styles.photoInput} editable={false} />
      {/* <Image source={{ uri: image }} style={styles.photo} /> */}
      <Text style={styles.title}>Title</Text>
      <View style={styles.itemWrapper}>
        <TouchableOpacity onPress={handleCommentsPress}>
          <View style={styles.itemBox}>
            <Feather name="message-circle" size={24} color="#bdbdbd" />
            <Text style={styles.itemText}>0</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlacePress}>
          <View style={styles.itemBox}>
            <Feather name="map-pin" size={24} color="#bdbdbd" />
            <Text style={styles.itemText}>Place</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    fontFamily: "rb-reg",
    fontSize: 16,
    backgroundColor: "#ffffff",
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  userPhotoInput: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  userTextBox: {
    marginLeft: 8,
  },
  userTitle: {
    fontFamily: "rb-med",
    fontSize: 13,
  },
  userText: {
    fontFamily: "rb-reg",
    fontSize: 11,
  },
  photoInput: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginBottom: 8,
  },
  title: {
    fontFamily: "rb-med",
    fontSize: 16,
    marginBottom: 8,
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemBox: {
    flexDirection: "row",
    gap: 6,
  },
  itemText: {
    fontFamily: "rb-reg",
    fontSize: 16,
  },
});
