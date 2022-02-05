import React, { useContext, useState, useEffect } from 'react';
import { auth, provider } from '../firebase/firebaseUtils';
import { signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail  } from 'firebase/auth';

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    // const [loading, setLoading] = useState(true);
    const [isUser, setIsUser] = useState(false);

    const login = () => {
        return signInWithPopup(auth, provider);
    }

    const emailSignup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailSignin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logout = () => {
        return auth.signOut();
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                // const uid = user.uid;
                // console.log(user)
                setCurrentUser(user)
                setIsUser(true)
                // setLoading(false)
                // setIsAuth(true)
            } else {
                // User is signed out
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
        login,
        logout,
        emailSignup,
        emailSignin,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};


