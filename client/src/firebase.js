// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-dd00e.firebaseapp.com",
  projectId: "mern-blog-dd00e",
  storageBucket: "mern-blog-dd00e.appspot.com",
  messagingSenderId: "487559755642",
  appId: "1:487559755642:web:849fc2c0aa9021b13988c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);