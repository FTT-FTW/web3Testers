import app from "firebase/compat/app";
import "firebase/compat/auth";
import firebase from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  Firestore,
} from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOfnFWVL0OMGUuTPzEBHJpqQyriXSEwRo",
  authDomain: "web3testers-d6666.firebaseapp.com",
  projectId: "web3testers-d6666",
  storageBucket: "web3testers-d6666.appspot.com",
  messagingSenderId: "802775644406",
  appId: "1:802775644406:web:1e9c032900b0c48971d4d7",
};

class Firebase {
  constructor() {
    this.app = app.initializeApp(firebaseConfig);
  }

  signUserIn = async () => {
    const provider = new app.auth.TwitterAuthProvider();
    let twitterObj;
    app
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        twitterObj = user.user.displayName;
        this.saveDataIn(twitterObj);
        console.log(twitterObj);
      });

    return twitterObj;
  };

  saveDataIn = async (twitter, metaAddress, email) => {
    const db = getFirestore(this.app);
    const collectionReference = collection(db, "Users");
    try {
      const q = query(collectionReference, where("username", "==", twitter));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        await addDoc(collection(db, "Users"), {
          username: twitter,
          metaAddress: metaAddress,
          email: email,
        });

        console.log("function save");
      }
    } catch (err) {
      alert(err);
    }
  };
}

export default Firebase;
