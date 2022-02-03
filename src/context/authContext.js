import React, { useContext, useState, useEffect } from 'react';
import { auth, provider } from '../firebase/firebaseUtils';
import { signInWithPopup, onAuthStateChanged  } from 'firebase/auth';

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [isUser, setIsUser] = useState(false);

    const login = () => {
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                console.log(user)
                setCurrentUser(user)
                setIsUser(true)
                setLoading(false)
                // setIsAuth(true)
                // ...
            } else {
                // User is signed out
                // ...
                setCurrentUser([])
                setIsUser(false)
                console.log('no USer')
                // setIsAuth(false)
            }
        });
        return unsubscribe
    }, []);

    const value = {
        currentUser,
        isUser,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};


