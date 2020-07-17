import firebase from "firebase";

firebase.initializeApp({
  
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };