// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJwhSjB9c0RrF9O9OPhb8NMyrAVzoXCDU",
  authDomain: "react-dragon-news-838ef.firebaseapp.com",
  projectId: "react-dragon-news-838ef",
  storageBucket: "react-dragon-news-838ef.appspot.com",
  messagingSenderId: "165759593018",
  appId: "1:165759593018:web:4de3ba9f90d51365a72303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;