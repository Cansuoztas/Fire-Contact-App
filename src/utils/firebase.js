
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCn0rVXGkt6RKfe3pn0tY6GoYtGOVKdhE",
  authDomain: "fire-contact-project-20f9f.firebaseapp.com",
  databaseURL: "https://fire-contact-project-20f9f-default-rtdb.firebaseio.com",
  projectId: "fire-contact-project-20f9f",
  storageBucket: "fire-contact-project-20f9f.appspot.com",
  messagingSenderId: "123967912053",
  appId: "1:123967912053:web:a065b63d59a03bb139a03c"
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;