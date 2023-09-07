import React from 'react'
import './Header.test';
import Holberton from '../assets/HolbertonLogo.jpg';

function Header() {
    return (
        <div className="App-header">
            <img src={Holberton}alt="logo" />
            <p>School dashboard</p>
        </div>
    )
}

export default Header
