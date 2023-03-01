import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

import { getAnalytics } from "firebase/analytics";

// We use firebase.ts to authenticate users from client side or to authenticate the client side


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


// 
export { db }