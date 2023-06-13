// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyAz-AXVZP7TfVwLykoNbMyQ4TE16O7UjPY',
  authDomain: 'reactnativeproject-b4c05.firebaseapp.com',
  databaseURL: 'https://reactnativeproject-b4c05.firebaseio.com',
  projectId: 'reactnativeproject-b4c05',
  storageBucket: 'reactnativeproject-b4c05.appspot.com',
  messagingSenderId: '1055781550446',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);