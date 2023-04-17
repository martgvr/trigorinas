import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAsBY50tJ0nZXqXDEwYhjoWq-wwwtW72nU",
    authDomain: "trigorinas.firebaseapp.com",
    projectId: "trigorinas",
    storageBucket: "trigorinas.appspot.com",
    messagingSenderId: "403531199927",
    appId: "1:403531199927:web:4b63d8e409ba7d11352432"  
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)