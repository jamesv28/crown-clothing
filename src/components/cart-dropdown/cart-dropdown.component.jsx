import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            { cartItems.length ?
              cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
              )) : 
              <span>No items added to cart</span>
            }
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });

export default connect(mapStateToProps)(CartDropdown);

