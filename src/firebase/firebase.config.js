// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1mNov5SEUUkewstRVgVKYFb2pB1J3RqQ",
  authDomain: "the-dragon-news-9db3b.firebaseapp.com",
  projectId: "the-dragon-news-9db3b",
  storageBucket: "the-dragon-news-9db3b.firebasestorage.app",
  messagingSenderId: "880070291265",
  appId: "1:880070291265:web:9ad0a1020715c1498dfbc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;