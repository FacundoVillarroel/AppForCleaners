// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk1tKtsK6mZff7aywbzI4Y2Yw2GMtDtXs",
  authDomain: "helpling-app-68a03.firebaseapp.com",
  projectId: "helpling-app-68a03",
  storageBucket: "helpling-app-68a03.appspot.com",
  messagingSenderId: "36718555332",
  appId: "1:36718555332:web:3ac27fe4badbe968fdd991"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)