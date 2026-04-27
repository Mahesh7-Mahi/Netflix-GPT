// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9QhnQm2q9pNfEq1BCwxxmZCk66PHOIcw",
  authDomain: "netflix-gpt-83634.firebaseapp.com",
  projectId: "netflix-gpt-83634",
  storageBucket: "netflix-gpt-83634.firebasestorage.app",
  messagingSenderId: "21459787836",
  appId: "1:21459787836:web:255e713749ab768fc2a339",
  measurementId: "G-GWP072WQNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
