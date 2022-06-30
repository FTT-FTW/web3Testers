// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOfnFWVL0OMGUuTPzEBHJpqQyriXSEwRo",
  authDomain: "web3testers-d6666.firebaseapp.com",
  projectId: "web3testers-d6666",
  storageBucket: "web3testers-d6666.appspot.com",
  messagingSenderId: "802775644406",
  appId: "1:802775644406:web:1e9c032900b0c48971d4d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
