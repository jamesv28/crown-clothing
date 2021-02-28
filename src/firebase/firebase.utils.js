import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAbvIJo-VYS7uT8F9RFvehFwILDTkcJfXM",
  authDomain: "crown-shoes.firebaseapp.com",
  projectId: "crown-shoes",
  storageBucket: "crown-shoes.appspot.com",
  messagingSenderId: "596123999722",
  appId: "1:596123999722:web:420b176e9a2d428bfee693",
  measurementId: "G-PBY1RYWBPF"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
