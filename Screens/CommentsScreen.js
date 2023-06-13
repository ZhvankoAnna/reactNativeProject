import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../config";
import { doc, updateDoc } from "firebase/firestore";
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CommentsScreen({ route }) {
  const [newComment, setNewComment] = useState("");
  const { item } = route.params;
  const { userId, userAvatar } = useSelector((state) => state.user);

  const handleAddComment = async () => {
    try {
      const postRef = await doc(db, "posts", item.postId);
      await updateDoc(postRef, {
        comments: [
          ...item.comments,
          {
            comment: newComment,
            userId,
            userAvatar,
          },
        ],
      });
      setNewComment("");
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <Image source={{ uri: item.photoURL }} style={styles.postPhoto} />
            <FlatList
              data={item.comments}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.commentWrapper}>
                  <Image
                    source={{ uri: item.userAvatar }}
                    style={styles.userAvatar}
                  />
                  <View style={styles.commentInner}>
                    <Text style={styles.comment}>{item.comment}</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View>
            <TextInput
              placeholder="Коментувати..."
              value={newComment}
              onChangeText={setNewComment}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={handleAddComment}
            >
              <AntDesign name="arrowup" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    marginBottom: 34,
  },
  commentWrapper: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  userAvatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  commentInner: {
    width: "86%",
    padding: 16,
    borderRadius: 6,
    borderTopLeftRadius: 0,
    backgroundColor: "#e8e8e8",
  },
  comment: {
    fontFamily: "rb-reg",
    fontSize: 13,
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
