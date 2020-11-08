import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBFe6sf6rYy9QW7pRyx_M_HNbdRZGPyk3M",
  authDomain: "web-noticias-2afda.firebaseapp.com",
  databaseURL: "https://web-noticias-2afda.firebaseio.com",
  projectId: "web-noticias-2afda",
  storageBucket: "web-noticias-2afda.appspot.com",
  messagingSenderId: "566569793636",
  appId: "1:566569793636:web:ce28078971ee0d1fc6c771"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
  
}