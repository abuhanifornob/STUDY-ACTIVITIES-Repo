import React from 'react';
import logo from '../../imagese/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
            <img src={logo} alt="" className='logo-img' />
            <h3>STUDY-ACTIVITIES</h3>
            </div>
            
        </div>
    );
};

export default Header;