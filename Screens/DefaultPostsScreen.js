import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsList } from "../Redux/Posts/posts-operations";
import { getCurrent } from "../Redux/Auth/auth-operations";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function DefaultPostsScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userAvatar, userNickname, userEmail } = useSelector(
    (state) => state.user
  );
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getCurrent());
    dispatch(getPostsList());
  }, [dispatch, posts]);

  const handleCommentsPress = (photoURL, comments) => {
    navigation.navigate("CommentsScreen", { photoURL, comments });
  };

  const handlePlacePress = (coords) => {
    navigation.navigate("MapScreen", {
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoWrapper}>
        <Image source={{ uri: userAvatar }} style={styles.userPhoto} />
        <View style={styles.userTextBox}>
          <Text style={styles.userTitle}>{userNickname}</Text>
          <Text style={styles.userText}>{userEmail}</Text>
        </View>
      </View>
      <FlatList
        style={{ width: "100%" }}
        data={posts}
        keyExtractor={(item) => item.postId.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 34 }}>
            <Image source={{ uri: item.photoURL }} style={styles.postPhoto} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.itemWrapper}>
              <TouchableOpacity
                onPress={() => handleCommentsPress(item.photoURL, item.comments)}
              >
                <View style={styles.itemBox}>
                  <Feather name="message-circle" size={24} color="#bdbdbd" />
                  <Text style={styles.itemText}>{item.comments.length}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlePlacePress(item.coords)}>
                <View style={styles.itemBox}>
                  <Feather name="map-pin" size={24} color="#bdbdbd" />
                  <Text
                    style={{
                      ...styles.itemText,
                      textDecorationLine: "underline",
                    }}
                  >
                    {item.location}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
  userPhoto: {
    width: 60,
    height: 60,
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
    gap: 6,
  },
  itemText: {
    fontFamily: "rb-reg",
    fontSize: 16,
  },
});
