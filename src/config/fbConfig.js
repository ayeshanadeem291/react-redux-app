import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAN3FNe1G4F9dSaDvSBkOLqXZgxIusd0XM",
    authDomain: "marioplan-2124a.firebaseapp.com",
    databaseURL: "https://marioplan-2124a.firebaseio.com",
    projectId: "marioplan-2124a",
    storageBucket: "marioplan-2124a.appspot.com",
    messagingSenderId: "656057350304",
    appId: "1:656057350304:web:55719cee58bb6d2d5731c5",
    measurementId: "G-WC2VK6LN2T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

firebase.firestore().settings({timestampsInSnapshots:true});
export default firebase;