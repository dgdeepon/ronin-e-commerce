// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJDEhgblcPVCg-ZJ4GW4Mu21yZI382Ahk",
  authDomain: "ronin-e-commerce-ba438.firebaseapp.com",
  projectId: "ronin-e-commerce-ba438",
  storageBucket: "ronin-e-commerce-ba438.appspot.com",
  messagingSenderId: "27715068476",
  appId: "1:27715068476:web:4fbb77b5d029298058d939",
  measurementId: "G-5DSWCSFTEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getDatabase(app);

export {db};