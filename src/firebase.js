import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDaWyVFScKEMSJsIejNmrusTeDtD7vvCfM",
  authDomain: "login-register-c9c16.firebaseapp.com",
  projectId: "login-register-c9c16",
  storageBucket: "login-register-c9c16.appspot.com",
  messagingSenderId: "1091815595569",
  appId: "1:1091815595569:web:a28beebff006fcf8c5bf10",
  measurementId: "G-7PR29H66QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)