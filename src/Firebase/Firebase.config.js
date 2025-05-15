// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Do not share config file anyone.
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcholi71IWjf4zzNFVhqdnfJ1H8WvHH2o",
  authDomain: "auth-integration-5304e.firebaseapp.com",
  projectId: "auth-integration-5304e",
  storageBucket: "auth-integration-5304e.firebasestorage.app",
  messagingSenderId: "345979704536",
  appId: "1:345979704536:web:76b39a4746b1df360a33ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);