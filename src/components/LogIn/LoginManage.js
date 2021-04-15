import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config"

export const initializeLogin = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
}


export const handleGoogleSingIN = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            const { displayName, email, photoUrl } = res.user;
            const signInUser = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoUrl,
                success: true,
            };
            return signInUser;
        })
        .catch((err) => {
            console.log(err);
            console.log(err.message);
        });
};
