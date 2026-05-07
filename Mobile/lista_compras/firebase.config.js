// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCm4EqR6tYePKo_iDe5c7qL7vncHjEurPU",
    authDomain: "lista-de-compras-69fd6.firebaseapp.com",
    projectId: "lista-de-compras-69fd6",
    storageBucket: "lista-de-compras-69fd6.firebasestorage.app",
    messagingSenderId: "546083941704",
    appId: "1:546083941704:web:4c0969aab46afdd450977d",
    measurementId: "G-KNGZT98KTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);