// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYpO1sW9uZdOa3uCeFUZBNl-trc3pS86o",
  authDomain: "fire-contact-app-a5da4.firebaseapp.com",
  databaseURL: "https://fire-contact-app-a5da4-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app-a5da4",
  storageBucket: "fire-contact-app-a5da4.appspot.com",
  messagingSenderId: "551554735441",
  appId: "1:551554735441:web:31d270f6bc848786ac0770",
  measurementId: "G-TZ65HHZZJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);