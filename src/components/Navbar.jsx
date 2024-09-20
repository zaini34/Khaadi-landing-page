import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwb33579b0/images/logo/logo.svg" alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="/sale" className='sale'>SALE</a></li>
                <li><a href="/new-in">NEW IN</a></li>
                <li><a href="/instakhaadi" className='insta'>#INSTAKHAADI</a></li>
                <li><a href="/fabrics">FABRICS</a></li>
                <li><a href="/ready-to-wear">READY TO WEAR</a></li>
                <li><a href="/fragrances">FRAGRANCES</a></li>
                <li><a href="/home">HOME</a></li>
            </ul>
            <div className="nav-icons">
                <a href="/search"><FontAwesomeIcon icon={faSearch} /></a>
                <a href="/favorites"><FontAwesomeIcon icon={faHeart} /></a>
                <a href="/account"><FontAwesomeIcon icon={faUser} /></a>
                <a href="/cart"><FontAwesomeIcon icon={faShoppingBag} /></a>
            </div>
        </nav>
    );
};

export default Navbar;
