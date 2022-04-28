// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADB83EWdfHtnqOkuQ2-iOHii-eXX3hm9k",
  authDomain: "genius-car-service-d49ef.firebaseapp.com",
  projectId: "genius-car-service-d49ef",
  storageBucket: "genius-car-service-d49ef.appspot.com",
  messagingSenderId: "173877696244",
  appId: "1:173877696244:web:904caee00f0c69a897f0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app) ;
export default app ;
