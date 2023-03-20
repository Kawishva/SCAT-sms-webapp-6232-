import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpCdOz9Z3sIDjwk5TTjTI36EV-EVynFdg",
    authDomain: "scat-assignment-6232-sms.firebaseapp.com",
    projectId: "scat-assignment-6232-sms",
    storageBucket: "scat-assignment-6232-sms.appspot.com",
    messagingSenderId: "389601279159",
    appId: "1:389601279159:web:8491900122c4ce20bfa132"
};


const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app);


export { auth,db }