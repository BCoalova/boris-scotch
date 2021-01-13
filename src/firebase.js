import firebase from "firebase/app";

import "firebase/firestore";


const config = {
    apiKey: "AIzaSyBUxlHC2lbEA2J7vb6YatxWhHaikJftNa4",
    authDomain: "coderhouse-ecommerce-b2612.firebaseapp.com",
    databaseURL: "https://coderhouse-ecommerce-b2612-default-rtdb.firebaseio.com",
    projectId: "coderhouse-ecommerce-b2612",
    storageBucket: "coderhouse-ecommerce-b2612.appspot.com",
    messagingSenderId: "502767622331",
    appId: "1:502767622331:web:0aadfc9399ed603baef19e"
};
const app = firebase.initializeApp(config);

export const getFirestore = () => {
    return firebase.firestore(app)
}