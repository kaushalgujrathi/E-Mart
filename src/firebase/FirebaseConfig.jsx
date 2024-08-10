// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "apikey",
  authDomain: ".firebaseapp.com",
  projectId: "projectId",
  storageBucket: ".appspot.com",

  
  messagingSenderId: "msgid",
  appId: "appid"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
