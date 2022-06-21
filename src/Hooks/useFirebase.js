import { useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,FacebookAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


import initializeAuthenticaion from "../Components/Login/Firebase/firebase.init"; 

initializeAuthenticaion();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)

        const googleProvider = new GoogleAuthProvider(); 

        // Google Sign In
      return  signInWithPopup(auth, googleProvider);
            

    }
    //Facebook Login
    const signInUsingFacebook = () => {
        setIsLoading(true)
        const facebookProvider = new FacebookAuthProvider();

       return signInWithPopup(auth, facebookProvider)
           
    }
    
    // Create new user with Email & Password Login
    const createUserWithEmailPassword = (name, email, password, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                // firebase user displayName update
                updateUserName(name);
                navigate('/');
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // Sign In User Email and Password
    const signInUserEmailAndPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            }).catch((error) => {
                setError(error.message)
            })
    }

    // Update use Register displayName
    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        })
    }

    // Log out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
        
    }

    // Observer state change
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    return {
        user, 
        error,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        logOut,
        signInUsingGoogle,
        signInUsingFacebook,
        createUserWithEmailPassword, 
        signInUserEmailAndPass
    }


}   

export default useFirebase;