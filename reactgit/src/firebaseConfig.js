// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_AW6x4hhPWgETCCZR3DlhkKsNLJLzis8",
  authDomain: "reactfb-52ef1.firebaseapp.com",
  projectId: "reactfb-52ef1",
  storageBucket: "reactfb-52ef1.firebasestorage.app",
  messagingSenderId: "1098969211841",
  appId: "1:1098969211841:web:e163561720ae0975a5c540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);