// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4EOJFwMjo1oVe2RV88hvvdf2J8A1IS4k",
  authDomain: "cpcompany-da8e5.firebaseapp.com",
  projectId: "cpcompany-da8e5",
  storageBucket: "cpcompany-da8e5.appspot.com",
  messagingSenderId: "423823360722",
  appId: "1:423823360722:web:f895f9d1b7d36ccde6630b",
  measurementId: "G-8LZ5KTCFCG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db }