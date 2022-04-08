import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD451t1Wlvvl70_pHdm_GBq7t0wfCW_y1g",
  authDomain: "chat-16950.firebaseapp.com",
  projectId: "chat-16950",
  storageBucket: "chat-16950.appspot.com",
  messagingSenderId: "823373814704",
  appId: "1:823373814704:web:3a85efb02b4a1d2b99d475",
  measurementId: "G-PTNMMH3X65",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
