import React from 'react';
import './header.styles.scss';
import logo from '../../assets/logo512.png';
import location from '../../assets/icons/location.svg';

const Header = ({ children }) => {
    return (
        <div className="header">
            <div className="main fl fl-j-sb">
                <div className="logo fl fl-c" >
                    <div className="logoPrimary fl fl-c">Eg</div>
                    <div className="logoSecondary fl fl-c">Shop</div>
                </div>
                <div className='location fl fl-c fl-j-fs '>
                    <img src={location} alt="" />
                    <div className="deliver w100 lhinit">
                        <div className="title">Deliver to</div>
                        <div className="add">387 N Aliganj Lucknow</div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Header;
