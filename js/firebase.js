// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGSBslOuPEFJD0OdW6W7ETRzKV_aTqtpk",
  authDomain: "gleamguzel.firebaseapp.com",
  projectId: "gleamguzel",
  storageBucket: "gleamguzel.firebasestorage.app",
  messagingSenderId: "683782308848",
  appId: "1:683782308848:web:c1c5c29f472beca2335335",
  measurementId: "G-YS84DQT0G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);