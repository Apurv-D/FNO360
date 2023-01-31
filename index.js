// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
const fb = require('firebase');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5OU7UJuUJ6eieqpgUefZhLHBd_XmEEQI",
  authDomain: "fno360.firebaseapp.com",
  projectId: "fno360",
  storageBucket: "fno360.appspot.com",
  messagingSenderId: "312128143685",
  appId: "1:312128143685:web:c748273fbd21a51783fe2c",
  measurementId: "G-PMPQ9M03Z1",
//   databaseURL: ""
};

// Initialize Firebase
const app = fb.initializeApp(firebaseConfig);
let db = fb.databaseURL("https://fno360-default-rtdb.firebaseio.com/")
db.ref("text").set("hello world");
