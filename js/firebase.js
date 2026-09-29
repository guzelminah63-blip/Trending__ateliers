// Import Firebase using the CDN (works directly in the browser, no build tools needed)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
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

// Initialize Authentication and export it so login.js/signup.js can use it
const auth = getAuth(app);

export { auth };