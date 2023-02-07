import { initializeApp } from "firebase/app";

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
