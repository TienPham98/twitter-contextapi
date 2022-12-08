// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj-flDzum489KKQxzhkLV1TfrwHtcyuhM",
  authDomain: "twiter-contextapi.firebaseapp.com",
  projectId: "twiter-contextapi",
  storageBucket: "twiter-contextapi.appspot.com",
  messagingSenderId: "295901865477",
  appId: "1:295901865477:web:90881626a222df99a09e6c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
