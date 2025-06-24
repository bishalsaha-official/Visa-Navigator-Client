// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8qH-PnLdFicPaMgZLT-njYKCpaTlFGw0",
  authDomain: "visa-navigator-7bea5.firebaseapp.com",
  projectId: "visa-navigator-7bea5",
  storageBucket: "visa-navigator-7bea5.firebasestorage.app",
  messagingSenderId: "193575126948",
  appId: "1:193575126948:web:ce39137b738233676e2331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);