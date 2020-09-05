import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3ZE8YVKuDY9IB7KozRxdJw9YU7U7BbpU",
  authDomain: "tinder-clone-83a90.firebaseapp.com",
  databaseURL: "https://tinder-clone-83a90.firebaseio.com",
  projectId: "tinder-clone-83a90",
  storageBucket: "tinder-clone-83a90.appspot.com",
  messagingSenderId: "756705139809",
  appId: "1:756705139809:web:f771e81de11c3994d19e20",
};

const firebaseX = firebase.initializeApp(firebaseConfig);
const database = firebaseX.firestore();

export default database;
