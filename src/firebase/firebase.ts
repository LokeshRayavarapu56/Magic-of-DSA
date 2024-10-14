import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFDsfq4oMu5hhj3dlJylF4nf2AH5uCaSc",
  authDomain: "leetclone-6a26c.firebaseapp.com",
  projectId: "leetclone-6a26c",
  storageBucket: "leetclone-6a26c.appspot.com",
  messagingSenderId: "510667628296",
  appId: "1:510667628296:web:6090b3a3b0e20bb2a556bd"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };