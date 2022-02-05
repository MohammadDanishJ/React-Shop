import React from 'react';
import './header.styles.scss';
import location from '../../assets/icons/location.svg';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Header = ({ children }) => {
    const { isUser, currentUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/login')
    }


    return (
        <div className="header">
            <div className="main fl fl-j-sb">
                <div className="logo fl fl-c" >
                    <div className="logoPrimary fl fl-c">Eg</div>
                    <div className="logoSecondary fl fl-c">Shop</div>
                </div>
                <div className='location fl fl-c fl-j-fs '>
                    {isUser ?
                        <>
                        {console.log(currentUser.displayName || currentUser.email)}
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
