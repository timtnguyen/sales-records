import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA1OzGe-EZ7WB3nkvPmnz0teDB7kLpa7L0",
  authDomain: "sales-data-cdbe8.firebaseapp.com",
  databaseURL: "https://sales-data-cdbe8.firebaseio.com",
  projectId: "sales-data-cdbe8",
  storageBucket: "sales-data-cdbe8.appspot.com",
  messagingSenderId: "303873876509",
  appId: "1:303873876509:web:45ebaf67dec732f9039cf4",
  measurementId: "G-N7LKCBNHSF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
