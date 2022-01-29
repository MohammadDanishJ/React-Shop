import React from 'react';
import { NavLink } from 'react-router-dom';
import { pages } from '../../data';
import "./navbar.styles.scss";

const Navbar = () => {
    return (
        <nav>
            {pages.map((item, index) => {
                return (
                    <NavLink key={index} to={item.path}>{item.title}</NavLink>
                );
            })}
        </nav>
    );
};

export default Navbar;
