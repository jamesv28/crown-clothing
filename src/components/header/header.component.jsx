import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                <strong>
                 Shop
                </strong>
            </Link>
            <Link to="/shop" className="option">
                <strong>
                    Contact
                </strong>
            </Link>
        </div>
    </div>
)

export default Header;