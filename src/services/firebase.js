import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPU2EcSwFfOuLssHJUMIA9rCiTEA1Oiko",
    authDomain: "stock-market-app-auth.firebaseapp.com",
    projectId: "stock-market-app-auth",
    storageBucket: "stock-market-app-auth.appspot.com",
    messagingSenderId: "469569718811",
    appId: "1:469569718811:web:b2481385af93be06a9c6be"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
