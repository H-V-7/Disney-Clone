// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_F1YrTk-Yl1ZAWeDNwuoEj6CIGVra5ek",
    authDomain: "video-streaming-app-2dace.firebaseapp.com",
    projectId: "video-streaming-app-2dace",
    storageBucket: "video-streaming-app-2dace.appspot.com",
    messagingSenderId: "333228803558",
    appId: "1:333228803558:web:cd6c30ff24e34996390227",
    measurementId: "G-Z54QC460QY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


//Here we created login with google which is a promise to be reutrned
//to us


export { auth, provider }