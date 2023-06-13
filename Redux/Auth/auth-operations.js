import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../config";
import { authSlice } from "./auth-slice";

// const { updateUserInfo, getCurrentUser } = authSlice.actions;

export const register =
  ({ email, password, imageURL, login }) =>
  async (dispatch, getState) => {
    // console.log('nickname', login)
    // console.log('imageURL', imageURL)

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: imageURL,
      });
      const user = auth.currentUser;
      dispatch(
        authSlice.actions.updateUserInfo({
          id: user.uid,
          email: user.email,
          nickname: user.displayName,
          avatar: user.photoURL,
        })
      );
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        authSlice.actions.updateUserInfo({
          id: user.uid,
          email: user.email,
          nickname: user.displayName,
          avatar: user.photoURL,
        })
      );
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

export const getCurrent = () => async (dispatch, getState) => {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          authSlice.actions.updateUserInfo({
            id: user.uid,
            email: user.email,
            nickname: user.displayName,
            avatar: user.photoURL,
          })
        );
      }
    });
  } catch (error) {
    console.log(error.code, error.message);
  }
};

export const logOut = () => async (dispatch, getState) => {
  try {
    await signOut(auth);
    dispatch(authSlice.actions.userLogOut());
  } catch (error) {
    console.log(error.code, error.message);
  }
};
