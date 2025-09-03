// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, isSupported } from "firebase/messaging";

// Firebase configuration from user
const firebaseConfig = {
  apiKey: "AIzaSyAbG9kxSslOUeeVTBwxwxQIhj3qReGQgFk",
  authDomain: "veltech-hackathon-07.firebaseapp.com",
  projectId: "veltech-hackathon-07",
  storageBucket: "veltech-hackathon-07.firebasestorage.app",
  messagingSenderId: "412836811045",
  appId: "1:412836811045:web:a61d43ac55e74821a38acc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize messaging only if supported (for web push notifications)
let messaging = null;
isSupported().then((supported) => {
  if (supported) {
    messaging = getMessaging(app);
  }
});

export { messaging };
export default app;