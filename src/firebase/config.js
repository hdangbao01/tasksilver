import { initializeApp } from "firebase/app"

// import { getAuth } from "firebase/auth"
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyCXY54YpU19VxZNjFjsynOVkCavV4nPQIQ",
    authDomain: "tasksilver-3bbd5.firebaseapp.com",
    projectId: "tasksilver-3bbd5",
    storageBucket: "tasksilver-3bbd5.appspot.com",
    messagingSenderId: "1011584325209",
    appId: "1:1011584325209:web:aa3dc0cd38358385cf0348",
    measurementId: "G-R9B6BMLHNB"
};

const app = initializeApp(firebaseConfig)

// const auth = getAuth(app)
const db = getFirestore(app)
// const analytics = getAnalytics(app)

connectFirestoreEmulator(db, 'localhost', 8080)

export { db }