// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdmoUIq3rVqEdd03JrROWQH5EiHmFKgf8",
  authDomain: "store-c8656.firebaseapp.com",
  projectId: "store-c8656",
  storageBucket: "store-c8656.appspot.com",

  
  messagingSenderId: "890555851619",
  appId: "1:890555851619:web:a480e5834ee83fb5b5e956"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;