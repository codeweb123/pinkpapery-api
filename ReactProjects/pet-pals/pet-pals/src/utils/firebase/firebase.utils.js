import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8wc8h_DRYqx5ScoMv8qgysqEMvtX7qW8",
  authDomain: "petpals-db.firebaseapp.com",
  projectId: "petpals-db",
  storageBucket: "petpals-db.appspot.com",
  messagingSenderId: "159116193580",
  appId: "1:159116193580:web:6be6baec18862e31b4c689",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFomAuth = async (userAuth) => {
    const userDocRef = 
}
