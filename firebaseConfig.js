import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIg4e7CjB7yPFX_U25r8CvzCqxhECJ62I",
  authDomain: "react-native-signin-3519.firebaseapp.com",
  projectId: "react-native-signin-3519",
  storageBucket: "react-native-signin-3519.appspot.com",
  messagingSenderId: "748718354738",
  appId: "1:748718354738:web:2a38cc8bdb7f48c4ebe72b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
