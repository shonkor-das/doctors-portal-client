// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvIXfgPY7ddVrPlZlq5IGUHMavNGLdmxw",
  authDomain: "doctors-portal-client-dfa23.firebaseapp.com",
  projectId: "doctors-portal-client-dfa23",
  storageBucket: "doctors-portal-client-dfa23.appspot.com",
  messagingSenderId: "689991849873",
  appId: "1:689991849873:web:beb716cc0f8b07f8096c30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;