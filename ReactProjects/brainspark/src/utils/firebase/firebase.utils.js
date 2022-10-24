import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWwtU6LM3qiolpk8YJBlVZy_QJQudhdz0",
  authDomain: "project-b0f84.firebaseapp.com",
  projectId: "project-b0f84",
  storageBucket: "project-b0f84.appspot.com",
  messagingSenderId: "547524336457",
  appId: "1:547524336457:web:9779443b6ee885c1bf9898",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
