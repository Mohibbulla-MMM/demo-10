// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AddddddddddddddddddddddddddYQ",
    authDomain: "sdddddddddddddddddddddddddm",
    projectId: "sddddddddddddddddddddddddd8",
    storageBucket: "sddddddddddddddddddddddddm",
    messagingSenderId: "2dddddddddddddddddddddddddddddddd",
    appId: "1:20dddddddddddddddddddddddddddddddddddc21b5773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth;