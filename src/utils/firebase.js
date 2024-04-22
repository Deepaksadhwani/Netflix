// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiNPrQsBV-gm78w0BUbHfqbOgcCV-EdKY",
  authDomain: "netflixgpt--react-project.firebaseapp.com",
  projectId: "netflixgpt--react-project",
  storageBucket: "netflixgpt--react-project.appspot.com",
  messagingSenderId: "202069356262",
  appId: "1:202069356262:web:b5785060e79c62aebcd527",
  measurementId: "G-78JHVXPQM3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
