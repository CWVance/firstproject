// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyz6oAVDSnsgDJEVRjJaVXxChUdHAP0nQ",
  authDomain: "firstproject-156e7.firebaseapp.com",
  projectId: "firstproject-156e7",
  storageBucket: "firstproject-156e7.appspot.com",
  messagingSenderId: "495479467313",
  appId: "1:495479467313:web:ab7606122212ebba6c9410",
  measurementId: "G-1N06QYGKE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };