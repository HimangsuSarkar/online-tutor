import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderNav from '../HeaderNav/HeaderNav';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <HeaderNav></HeaderNav>
            <HeaderMain></HeaderMain>
        </div >
    );
};

export default Header;
