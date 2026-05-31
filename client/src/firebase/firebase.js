
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authainotes.firebaseapp.com",
  projectId: "authainotes",
  storageBucket: "authainotes.firebasestorage.app",
  messagingSenderId: "740597353124",
  appId: "1:740597353124:web:d4bdee2ed398f1bee7b431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

const provider=new GoogleAuthProvider();

export {auth,provider}