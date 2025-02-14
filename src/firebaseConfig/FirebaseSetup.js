// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6oR6jeKEqnRBeTyjGsMx_jegghQKtDLA",
  authDomain: "practicequizapp-c5332.firebaseapp.com",
  projectId: "practicequizapp-c5332",
  storageBucket: "practicequizapp-c5332.firebasestorage.app",
  messagingSenderId: "860085755463",
  appId: "1:860085755463:web:862ce9104f3e0ebec3db62",
  measurementId: "G-P4GVF2JMKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// Function to set up reCAPTCHA
const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });
  };    
  export { auth, setupRecaptcha, signInWithPhoneNumber };