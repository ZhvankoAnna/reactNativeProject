import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import pickImage from "../utils/pickImage";
import bgImage from "../assets/bgImage.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";

export default function ProfileScreen() {
  const { userAvatar, userNickname, userId } = useSelector(
    (state) => state.user
  );
  const { posts } = useSelector((state) => state.posts);
  const [image, setImage] = useState(userAvatar);
  const navigation = useNavigation();

  const handleCommentsPress = (photoURL) => {
    navigation.navigate("CommentsScreen", { photoURL });
  };

  const handlePlacePress = (coords) => {
    navigation.navigate("MapScreen", {
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  return (
    <ImageBackground source={bgImage} style={styles.img}>
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <View style={styles.photoWrapper}>
            <Image source={{ uri: image }} style={styles.userPhoto} />
            <TouchableOpacity
              onPress={() => pickImage(setImage)}
              style={styles.icon}
            >
              <Ionicons
                name="add-circle-outline"
                size={25}
                color={"#E8E8E8"}
                style={styles.removeIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.nickname}>{userNickname}</Text>
          <FlatList
            style={{ width: "100%" }}
            data={posts}
            keyExtractor={(item) => item.postId.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 34 }}>
                <Image
                  source={{ uri: item.photoURL }}
                  style={styles.postPhoto}
                />
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.itemWrapper}>
                  <View style={{ flexDirection: "row", gap: 27 }}>
                    <View style={styles.itemBox}>
                      <Feather
                        name="message-circle"
                        size={18}
                        color="#bdbdbd"
                      />
                      <Text style={styles.itemText}>0</Text>
                    </View>
                    <View style={styles.itemBox}>
                      <Feather name="thumbs-up" size={18} color="#FF6C00" />
                      <Text style={styles.itemText}>0</Text>
                    </View>
                  </View>
                  <View style={styles.itemBox}>
                    <Feather name="map-pin" size={18} color="#bdbdbd" />
                    <Text style={{...styles.itemText, textDecorationLine: 'underline'}}>{item.location}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    fontFamily: "rb-reg",
    fontSize: 16,
    paddingTop: 147,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  profileWrapper: {
    width: "100%",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 83,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  photoWrapper: {
    position: "absolute",
    top: -60,
    left: "35%",
  },
  userPhoto: {
    width: 120,
    height: 120,
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
  nickname: {
    fontFamily: "rb-med",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 33,
  },
  postPhoto: {
    width: "100%",
    height: 240,
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
    alignItems: "center",
    gap: 6,
  },
  itemText: {
    fontFamily: "rb-reg",
    fontSize: 16,
  },
});
