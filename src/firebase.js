import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDGIgffcf0KZs2Vq85-q1E1J7psF0TvYLI",
    authDomain: "slack-clone-69aba.firebaseapp.com",
    databaseURL: "https://slack-clone-69aba.firebaseio.com",
    projectId: "slack-clone-69aba",
    storageBucket: "slack-clone-69aba.appspot.com",
    messagingSenderId: "487323173265",
    appId: "1:487323173265:web:e7793814504e370b559a30",
    measurementId: "G-NVQVWL5Q0W",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;

//   import {db, auth} from './firebase';
//   import db from './firebase';
