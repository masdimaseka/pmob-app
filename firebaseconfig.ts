import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVsW2KGEEejHZdDNJo6x5oXjRbLjMteiQ",
  authDomain: "jalinplatform.firebaseapp.com",
  projectId: "jalinplatform",
  storageBucket: "jalinplatform.firebasestorage.app",
  messagingSenderId: "267813018543",
  appId: "1:267813018543:web:ae5f15953db297f9222d5a",
  measurementId: "G-D17F5FD1Y4",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
