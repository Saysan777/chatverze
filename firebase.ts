import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7NW_aIoJjGlAyZe-cNg5z2FPbgPz5Ncc",
  authDomain: "chatverze.firebaseapp.com",
  projectId: "chatverze",
  storageBucket: "chatverze.appspot.com",
  messagingSenderId: "784336937639",
  appId: "1:784336937639:web:7923765b56dbe026df3182",
  measurementId: "G-WR99M9MREQ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }