// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-pz740q8jcaU4STrVFyolRmswkGtUQrY",
  authDomain: "netflix-b146c.firebaseapp.com",
  projectId: "netflix-b146c",
  storageBucket: "netflix-b146c.appspot.com",
  messagingSenderId: "893658856950",
  appId: "1:893658856950:web:d89cb3eb55f873719e9bd7",
  measurementId: "G-W23PR6BE1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
