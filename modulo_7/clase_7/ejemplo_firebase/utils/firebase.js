// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHus6qcllIQIrrkN_16YaifmdhE03yOOo",
  authDomain: "devf-817cd.firebaseapp.com",
  projectId: "devf-817cd",
  storageBucket: "devf-817cd.firebasestorage.app",
  messagingSenderId: "665689836572",
  appId: "1:665689836572:web:a26b12fc886d645e6b23d9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase