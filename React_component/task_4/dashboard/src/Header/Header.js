import React from 'react'
import Holberton from '../assets/HolbertonLogo.jpg';
import './Header.test';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img src={Holberton} alt="logo" />
            <p>School dashboard</p>
        </div>
    )
};

export default Header;
