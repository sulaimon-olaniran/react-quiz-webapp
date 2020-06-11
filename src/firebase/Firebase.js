import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  
    apiKey: "AIzaSyAZPRZp0WEX1jdZt_OI4Q0gyWVHUZ4Pw90",
    authDomain: "os-web-quiz.firebaseapp.com",
    databaseURL: "https://os-web-quiz.firebaseio.com",
    projectId: "os-web-quiz",
    storageBucket: "os-web-quiz.appspot.com",
    messagingSenderId: "209604532086",
    appId: "1:209604532086:web:fc6e7950cc9e2833ff8c57",
    measurementId: "G-G9NGLJ5D1Y"
  }

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()

export default firebase