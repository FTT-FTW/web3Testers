import app from "firebase/compat/app";
import "firebase/compat/auth";
import firebase from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  Firestore,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

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
    app
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        this.saveDataIn(user.user.displayName);
        console.log(user.user.displayName);
      });
  };

  saveDataIn = async (input) => {
    const db = getFirestore(app);
    const collectionReference = collection(db, "twitter");
    await addDoc(collectionReference, { username: input });
    // const db = getFirestore(app);
    // const collectionReference = collection(db, "twitter");
    // collectionReference.orderByChild
    // console.log('inside saveData function');
    // db.ref("twitter")
    //       .orderByChild("item")
    //       .equalTo(input)
    //       .on('value', function (snapshot) {
    //           if (snapshot.val() === null) {
    //             console.log('data saved successfully');
    //             addDoc(collectionReference, {username: input})
    //           }else{
    //               console.log('User is registered!');
    //           }
    //       })
  };
}

export default Firebase;
