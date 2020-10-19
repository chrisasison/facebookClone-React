// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDwYhtPI4misUxnI-JtbaYwChtIKxA6ROg",
    authDomain: "facebook-clone-fccd7.firebaseapp.com",
    databaseURL: "https://facebook-clone-fccd7.firebaseio.com",
    projectId: "facebook-clone-fccd7",
    storageBucket: "facebook-clone-fccd7.appspot.com",
    messagingSenderId: "792967774016",
    appId: "1:792967774016:web:fb80d70db00ae30ad604a5",
    measurementId: "G-D5PVKZLH9J"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;