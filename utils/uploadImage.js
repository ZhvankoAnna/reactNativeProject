import { storage } from "../config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadImage = async (image) => {
  const filename = image.substring(image.lastIndexOf("/") + 1);
  const response = await fetch(image);
  const file = await response.blob();
  const storageRef = ref(storage, `avatars/${filename}`);

  try {
    await uploadBytes(storageRef, file);
    const processedPhoto = await getDownloadURL(storageRef);
    return processedPhoto;
  } catch (error) {
    console.log(error.code, error.message);
  }
};

export default uploadImage;
