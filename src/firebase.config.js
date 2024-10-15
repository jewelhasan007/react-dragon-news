// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCojG2xupjemddQQFkSIyPeQMWS_FH7Fls",
  authDomain: "react-dragon-news-12718.firebaseapp.com",
  projectId: "react-dragon-news-12718",
  storageBucket: "react-dragon-news-12718.appspot.com",
  messagingSenderId: "421792677675",
  appId: "1:421792677675:web:65b27df9f41a1b7338cf6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;