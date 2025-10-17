// firebase-init.js — shared Firebase initialization (module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// ---- Your Firebase config (from your message) ----
const firebaseConfig = {
  apiKey: "AIzaSyDFrctk2MZajP7OmECXe5npHAV0dODH9jk",
  authDomain: "matrixmarketplace-1bd71.firebaseapp.com",
  databaseURL: "https://matrixmarketplace-1bd71-default-rtdb.firebaseio.com",
  projectId: "matrixmarketplace-1bd71",
  storageBucket: "matrixmarketplace-1bd71.firebasestorage.app",
  messagingSenderId: "10374416997",
  appId: "1:10374416997:web:738bf3b478e555fd87548c",
  measurementId: "G-D6GY5ZHC1J"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
