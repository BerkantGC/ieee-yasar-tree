
// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIKhz9qGlqn0xrj36W7Z59lTOXnzBvbSQ",
  authDomain: "mugtree-4aaa9.firebaseapp.com",
  projectId: "mugtree-4aaa9",
  storageBucket: "mugtree-4aaa9.appspot.com",
  messagingSenderId: "486245077533",
  appId: "1:486245077533:web:61c97f04ba701d036f2cf4",
  measurementId: "G-6Y4G086MHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const firebase = getFirestore(app);