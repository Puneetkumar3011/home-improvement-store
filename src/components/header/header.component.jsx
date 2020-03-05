import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {
  selectCartHidden,
  selectCartTotal
} from '../../store/cart/cart.selectors';
import { selectCurrentUser } from '../../store/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/home.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden, totalItemsInCart }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/about">
        ABOUT US
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => console.log('Signed out')}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden || totalItemsInCart === 0 ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  totalItemsInCart: selectCartTotal
});

export default connect(mapStateToProps)(Header);
