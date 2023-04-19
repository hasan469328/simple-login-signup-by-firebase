// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4N8l0Vs8Nlojp5T5hFnmI_eoELH5DQck",
  authDomain: "auth-firebase-context-ta-2d7fa.firebaseapp.com",
  projectId: "auth-firebase-context-ta-2d7fa",
  storageBucket: "auth-firebase-context-ta-2d7fa.appspot.com",
  messagingSenderId: "256653086177",
  appId: "1:256653086177:web:e8650176db2601d92256a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;