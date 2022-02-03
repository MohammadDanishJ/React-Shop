import React, { useState } from 'react';
import './header.styles.scss';
import location from '../../assets/icons/location.svg';
import { auth, provider } from '../../firebase/firebaseUtils';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useAuth } from '../../context/authContext';

const Header = ({ isAuth, setIsAuth, children }) => {
    const [error, setError] = useState('')
    const { login, currentUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('')
            login();
        } catch (err) {
            setError(err)
        }
    }

    return (
        <div className="header">
            <div className="main fl fl-j-sb">
                {JSON.stringify(currentUser && currentUser.name)}
                <div className="logo fl fl-c" >
                    <div className="logoPrimary fl fl-c">Eg</div>
                    <div className="logoSecondary fl fl-c">Shop</div>
                </div>
                <div className='location fl fl-c fl-j-fs '>
                    {currentUser ?
                        <>
                            <img src={location} alt="" />
                            <div className="deliver w100 lhinit">

                                <div className="title">Deliver to</div>
                                <div className="add">387 N Aliganj Lucknow</div>
                            </div>
                        </>
                        : <button className='login-google' onClick={handleSubmit}>Sign In</button>
                    }

                </div>
            </div>
            {children}
        </div >
    );
};

export default Header;
