import React from 'react';
import { NavLink } from 'react-router-dom';
import { pages } from '../../data';
import "./navbar.styles.scss";

const Navbar = () => {
    return (
        <nav className='fl fl-c'>
            <div className="nav fl h100">
                {pages.map((item, index) => {
                    return (
                        <NavLink key={index} to={item.path}>{item.title}</NavLink>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
