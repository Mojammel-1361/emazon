import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">shop</a>
                <a href="/orders">orders</a>
                <a href="/Inventory"> Inventory</a>
                <a href="/about">about</a>
            </div>
        </div>
    );
};

export default Header;