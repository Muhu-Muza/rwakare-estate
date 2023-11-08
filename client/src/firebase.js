
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rwakare-estate.firebaseapp.com",
  projectId: "rwakare-estate",
  storageBucket: "rwakare-estate.appspot.com",
  messagingSenderId: "784006268163",
  appId: "1:784006268163:web:b2efb43e0a93aab5f19536",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);