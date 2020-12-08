import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCEmVMSV1IDZCu5p28cQn3OFKb3CDAayBI",
    authDomain: "pink-avocado-store.firebaseapp.com",
    databaseURL: "https://pink-avocado-store.firebaseio.com",
    projectId: "pink-avocado-store",
    storageBucket: "pink-avocado-store.appspot.com",
    messagingSenderId: "218211562656",
    appId: "1:218211562656:web:2370c094990f515ee145c5",
    measurementId: "G-X9VCFP3MV5"
};

firebase.initializeApp(FIREBASE_CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
