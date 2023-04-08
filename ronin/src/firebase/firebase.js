// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfwcTsQcTy14KnZ7yXdMN1B-PTOXpNvDQ",
  authDomain: "ronin-e-commerce.firebaseapp.com",
  databaseURL: "https://ronin-e-commerce-default-rtdb.firebaseio.com",
  projectId: "ronin-e-commerce",
  storageBucket: "ronin-e-commerce.appspot.com",
  messagingSenderId: "803509673535",
  appId: "1:803509673535:web:25ecb517f6bce81a8b228a",
  measurementId: "G-J1SYTQQR3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
