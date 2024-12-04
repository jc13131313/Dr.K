import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpzAE63osPiGVVf49_Q1u6zfvSOs-m5hk",
  authDomain: "dr-k-d071a.firebaseapp.com",
  projectId: "dr-k-d071a",
  storageBucket: "dr-k-d071a.appspot.com",
  messagingSenderId: "899308291991",
  appId: "1:899308291991:web:b6091dcea21f1dd78a26d2",
  measurementId: "G-9PXFWE07RT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, getDocs, getStorage };