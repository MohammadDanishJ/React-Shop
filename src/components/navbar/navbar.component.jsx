import React from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../../data';
import "./navbar.styles.scss";


const Navbar = () => {
    return (
        <nav>
            {pages.map((item, index) => {
                return (
                    <Link to={item.path}>
                        {item.title}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
