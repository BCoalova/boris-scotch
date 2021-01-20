import firebase from "firebase/app";	

import "firebase/firestore";

const apiKey = process.env.REACT_APP_apiKey
const authDomain = process.env.REACT_APP_authDomain
const databaseURL = process.env.REACT_APP_databaseURL
const projectId = process.env.REACT_APP_projectId
const storageBucket = process.env.REACT_APP_storageBucket
const messagingSenderId = process.env.REACT_APP_messagingSenderId
const appId = process.env.REACT_APP_appId

const config = {	
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
};	

const app = firebase.initializeApp(config);	

export const getFirestore = () => {	
    return firebase.firestore(app)	
} 

