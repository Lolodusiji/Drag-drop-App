// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI1VqqAudiu3fex1TuMB4E4dUrKdDjG6w",
  authDomain: "hng-dragndrop.firebaseapp.com",
  projectId: "hng-dragndrop",
  storageBucket: "hng-dragndrop.appspot.com",
  messagingSenderId: "651218681189",
  appId: "1:651218681189:web:5d19d34d56f14f7701758c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth}