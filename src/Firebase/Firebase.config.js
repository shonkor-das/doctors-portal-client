// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf6-PBaADFIWhInYfbSy4bdXqLA4XbwKQ",
  authDomain: "doctors-portal-419f1.firebaseapp.com",
  projectId: "doctors-portal-419f1",
  storageBucket: "doctors-portal-419f1.appspot.com",
  messagingSenderId: "911582189165",
  appId: "1:911582189165:web:c76e6a759c5a0a2c119164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;