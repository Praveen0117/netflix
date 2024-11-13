// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRvQ05k9iyfSiDalHW20RfAcCM0Ok3nMo",
  authDomain: "netflixgpt-b9dc6.firebaseapp.com",
  projectId: "netflixgpt-b9dc6",
  storageBucket: "netflixgpt-b9dc6.appspot.com",
  messagingSenderId: "883985241419",
  appId: "1:883985241419:web:cb7b5cc471cdf3d2a444ce",
  measurementId: "G-NZZ7G65GBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()