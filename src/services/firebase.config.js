import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAAgnp3erlsclKusYMjtuVZYXgnj_UQlqQ",
    authDomain: "trigorinas-dee41.firebaseapp.com",
    projectId: "trigorinas-dee41",
    storageBucket: "trigorinas-dee41.appspot.com",
    messagingSenderId: "930470692116",
    appId: "1:930470692116:web:eeb58755da6b351243ee01"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)