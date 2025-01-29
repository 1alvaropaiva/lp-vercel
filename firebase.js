import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL3-j6nWRe8seGI78Ob6LtEimsGxQboyw",
  authDomain: "portfolio-9d5fb.firebaseapp.com",
  projectId: "portfolio-9d5fb",
  storageBucket: "portfolio-9d5fb.firebasestorage.app",
  messagingSenderId: "266586349055",
  appId: "1:266586349055:web:3ac1229b9eab65f4c81bca",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };