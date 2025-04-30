// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKsnRIDJ2SHlbM5iIWtAyCWnFQAVBv-Kk",
  authDomain: "fir-f789d.firebaseapp.com",
  projectId: "fir-f789d",
  storageBucket: "fir-f789d.firebasestorage.app",
  messagingSenderId: "1093764866601",
  appId: "1:1093764866601:web:35304d85a23dbb28ff7238",
  measurementId: "G-QP0H8QV19N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get Auth instance
const auth = getAuth(app);

export { auth };