// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firbaseSignOut,
  getAuth,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRGUA39gjO23_QpPKBd6hyH5c0fIwqmok",
  authDomain: "chat-with-react-fccaa.firebaseapp.com",
  databaseURL:
    "https://chat-with-react-fccaa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-with-react-fccaa",
  storageBucket: "chat-with-react-fccaa.appspot.com",
  messagingSenderId: "319658789973",
  appId: "1:319658789973:web:49ed28d56c0a3f8b3e18dc",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};

export const login = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
  await firbaseSignOut(auth);
};
