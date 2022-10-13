import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNEbPdOTc-JcGgbOJp0TEpWGojs8xjock",
  authDomain: "react-chats-igor.firebaseapp.com",
  databaseURL: "https://react-chats-igor-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-chats-igor",
  storageBucket: "react-chats-igor.appspot.com",
  messagingSenderId: "554026761962",
  appId: "1:554026761962:web:53d42d4c9e33737e5e6193"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () =>
  await signOut(firebaseAuth);

export const db = getDatabase(app);

export const getChats = () => ref(db, 'chats');