// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJVUbbhXmtCoZVc9GXlzBs5SdJiOPJXBc",
  authDomain: "netflix-gpt-keerthikareddy.firebaseapp.com",
  projectId: "netflix-gpt-keerthikareddy",
  storageBucket: "netflix-gpt-keerthikareddy.appspot.com",
  messagingSenderId: "1047297855970",
  appId: "1:1047297855970:web:24257dab0af661f212a9bb",
  measurementId: "G-R8FS6HBH4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);