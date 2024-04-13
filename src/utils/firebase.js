// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBObLCGgFjXccGzxFB6xEjwz71HpRECgxs",
  authDomain: "react-netflix-gpt-75e3f.firebaseapp.com",
  projectId: "react-netflix-gpt-75e3f",
  storageBucket: "react-netflix-gpt-75e3f.appspot.com",
  messagingSenderId: "795581247426",
  appId: "1:795581247426:web:a8ebfd908f93fd2d60b05b",
  measurementId: "G-VWGPGXWRF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
