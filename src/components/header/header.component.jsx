import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionContainer, OptionLink} from './header.styles';
// import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop" >
                <strong>
                 Shop
                </strong>
            </OptionLink>
            <OptionLink to="/shop" >
                <strong>
                    Contact
                </strong>
            </OptionLink>
            <OptionLink to="/about" >
                <strong>
                    About
                </strong>
            </OptionLink>
            {
                currentUser ?
                <OptionContainer  onClick={() => auth.signOut()}>
                    <strong>
                        Sign Out 
                    </strong>
                </OptionContainer>
                : 
                <OptionLink to="/signin">
                    <strong>
                        Sign In
                    </strong>
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        { hidden ? null :
        <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);