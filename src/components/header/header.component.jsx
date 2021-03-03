import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import './header.styles.scss';

const Header = ({currentUser}) => (
    <nav className="header">
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
            <Link to="/about" className="option">
                <strong>
                    About
                </strong>
            </Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>
                    <strong>
                        Sign Out 
                    </strong>
                </div>
                : 
                <Link className="option" to="/signin">
                    <strong>
                        Sign In
                    </strong>
                </Link>
            }
        </div>
    </nav>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);