import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./../Pages/Login/Firebase/firebase.init"
initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            });
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    //Observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                setUser({})

            }
        });
        return () => unsubscribed;

    }, [])

    return { user, signInUsingGoogle, logOut };

}
export default useFirebase;