import React, {useState} from 'react';
import './header.styles.scss';
import location from '../../assets/icons/location.svg';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

import {MdClose} from 'react-icons/md';

const Header = ({ children}) => {
    const { isUser, currentUser } = useAuth();
    const navigate = useNavigate();

    const [isPaneOpen, setIsPaneOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/login')
    }

    const toggleClass = () => {
        setIsPaneOpen(!isPaneOpen);
        console.log(isPaneOpen)
    };

    return (
        <>
            <div className="header">{
                console.log(isPaneOpen)}
                <div className="main fl fl-j-sb">
                    <div className="logo fl fl-c" >
                        <div className="logoPrimary fl fl-c">Eg</div>
                        <div className="logoSecondary fl fl-c">Shop</div>
                    </div>
                    <div className='location fl fl-c fl-j-fs '>
                        {isUser ?
                            <div className='fl fl-c fl-j-fs ' onClick={toggleClass}>
                                <img src={location} alt="" />
                                <div className="deliver w100 lhinit">
                                    <div className="title">Deliver to</div>
                                    <div className="add">{currentUser.address || 'Add your address...'}</div>
                                </div>
                            </div>
                            : <button className='login-google' onClick={handleSubmit}>Sign In</button>
                        }

                    </div>
                </div>
                {children}
            </div >

            
            {/* sliding pane */}
            <div className={isPaneOpen ? 'sliding-pane pabs t0 w100 h100 active' : 'sliding-pane pabs t0 w100 h100'} >
                <div className="pane">
                    {isPaneOpen ? <div className="closePane" onClick={toggleClass}><MdClose size={28} /></div> : null}
                    <div className="header">Your location</div>
                    <div className="body">Find shops near you</div>
                </div>
            </div>
        </>
    );
};

export default Header;
