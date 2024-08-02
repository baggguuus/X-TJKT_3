// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAAcx_QopuQhErayh4i48FCaluOUSoRzo0",
  authDomain: "x-tjkt3.firebaseapp.com",
  projectId: "x-tjkt3",
  storageBucket: "x-tjkt3.appspot.com",
  messagingSenderId: "683628544283",
  appId: "1:683628544283:web:6ab82d6b86351d9c1953be",
  measurementId: "G-L38JKRJPXK"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();