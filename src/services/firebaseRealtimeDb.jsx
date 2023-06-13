// Import the functions you need from the SDKs you need
import { keys } from "../data/firebaseDbKeys";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: keys[0],
  authDomain: keys[1],
  databaseURL: keys[2],
  projectId: keys[3],
  storageBucket: keys[4],
  messagingSenderId: keys[5],
  appId: keys[6]
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;