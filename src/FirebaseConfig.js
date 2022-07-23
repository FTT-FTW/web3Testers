import app from "firebase/compat/app";
import "firebase/compat/auth";
import firebase from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import "firebase/firestore";
import Data from "../src/Data.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOfnFWVL0OMGUuTPzEBHJpqQyriXSEwRo",
  authDomain: "web3testers-d6666.firebaseapp.com",
  projectId: "web3testers-d6666",
  storageBucket: "web3testers-d6666.appspot.com",
  messagingSenderId: "802775644406",
  appId: "1:802775644406:web:1e9c032900b0c48971d4d7",
};
let twitterUserName;
class Firebase {
  constructor() {
    this.app = app.initializeApp(firebaseConfig);
  }

  signUserIn = async (twitterCallback) => {
    const provider = new app.auth.TwitterAuthProvider();
    app
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        twitterUserName = user.user.displayName;
        // alert("Twitter Connect Successful");
        twitterCallback();
      });
  };

  saveDataIn = async (metaAddress, email) => {
    const db = getFirestore(this.app);
    const collectionReference = collection(db, "Users");
    try {
      const data = new Data();
      data.username = twitterUserName;
      data.metaAddress = metaAddress;
      data.email = email;

      const q = query(
        collectionReference,
        where("username", "==", data.username)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        await addDoc(collection(db, "Users"), Object.assign({}, data));
      }
    } catch (err) {
      alert("Not saved successfuly please contact admins !");
    }
  };
}

export default Firebase;
