import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
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
            <CartIcon />
        </div>
        { hidden ? null :
        <CartDropdown />
        }
    </nav>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);