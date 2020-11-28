import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config ={
    apiKey: "AIzaSyDm6F-HlQOOM2yO00wiNkdyL3FpbiX88yA",
    authDomain: "fir-auth-redux-e5726.firebaseapp.com",
    databaseURL: "https://fir-auth-redux-e5726.firebaseio.com",
    projectId: "fir-auth-redux-e5726",
    storageBucket: "fir-auth-redux-e5726.appspot.com",
    messagingSenderId: "1033762965069",
    appId: "1:1033762965069:web:980597150d4235536d3e04",
    measurementId: "G-HHPM7KY2XL"
}
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)  return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    if(!snapShot.exists) {
        const {displayName, email} =userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error crating user', error.message)
        }
    }
    return userRef;
}


export const getCurrentUser =() => {
    return new Promise((resolve, reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth =>{
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}


export const auth = firebase.auth()
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt :'select_account'});

export const signInWithGoogle=()=> auth.signInWithPopup(googleProvider);

// export whole library if whole libary is needed 
export default firebase; 
