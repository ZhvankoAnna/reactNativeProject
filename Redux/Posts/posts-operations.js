import { db } from "../../config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { postsSlice } from "./posts-slice";

export const getPostsList = () => async (dispatch, getState) => {
  try {
    let list = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      list.push({ ...doc.data(), postId: doc.id });
    });
    dispatch(postsSlice.actions.setPostsList(list));
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (data) => async (dispatch, getState) => {
  try {
    await addDoc(collection(db, "posts"), { ...data });
    dispatch(postsSlice.actions.addUsersPost({ ...data }));
  } catch (error) {
    console.log(error.code, error.message);
  }
};
