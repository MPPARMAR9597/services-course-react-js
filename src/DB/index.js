import firebase from "firebase";
import 'firebase/firestore'

const db = firebase
    .initializeApp(
        {
            apiKey: "AIzaSyCBVmQZQTeR_IK2rp2uGDfoXkHhuOapVhY",
            authDomain: "services-react-js.firebaseapp.com",
            projectId: "services-react-js",
            storageBucket: "services-react-js.appspot.com",
            messagingSenderId: "319828187242",
            appId: "1:319828187242:web:9b3236fda20529b2895213",
            measurementId: "G-4YC42GCBJQ"
        }
    )
    .firestore()

export default db

const { Timestamp } = firebase.firestore

export { Timestamp }
