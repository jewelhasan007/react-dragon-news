// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWMiekYShrNW5YNqZAfipbh9FiMBtan8k",
  authDomain: "do-2do.firebaseapp.com",
  projectId: "do-2do",
  storageBucket: "do-2do.appspot.com",
  messagingSenderId: "864874719232",
  appId: "1:864874719232:web:a699d2fff0c0c4f857d0e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;