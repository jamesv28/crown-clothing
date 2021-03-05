import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            { cartItems.length ?
              cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
              )) : 
              <span>No items added to cart</span>
            }
        </div>
        <Button onClick={() => history.push('/checkout')}>CHECKOUT</Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });

export default withRouter(connect(mapStateToProps)(CartDropdown));

