// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfrUCHjjBQ4bQHBk3wlD-OSfWsB6YG03o",
  authDomain: "react-stripe-fa0d9.firebaseapp.com",
  projectId: "react-stripe-fa0d9",
  storageBucket: "react-stripe-fa0d9.firebasestorage.app",
  messagingSenderId: "566117766748",
  appId: "1:566117766748:web:baaf07acf38e4ab77e3899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {
    firestore,
};