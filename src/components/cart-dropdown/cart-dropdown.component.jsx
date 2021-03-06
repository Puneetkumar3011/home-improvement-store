import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { toggleCartHidden, emptyCart } from '../../store/cart/cart.actions';

import './cart-dropdown.styles.scss';

class CartDropdown extends React.Component {
  node = null;

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = event => {
    if (!this.node.contains(event.target)) {
      this.props.dispatch(toggleCartHidden());
    }
  };

  render() {
    const { cartItems, history, dispatch } = this.props;

    return (
      <div className="cart-dropdown" ref={node => (this.node = node)}>
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
        <div className="cart-btns">
          <CustomButton
            isCancel
            onClick={() => {
              dispatch(emptyCart());
            }}
          >
            Clear
          </CustomButton>
          <CustomButton
            onClick={() => {
              history.push('/checkout');
              dispatch(toggleCartHidden());
            }}
          >
            GO TO CHECKOUT
          </CustomButton>
        </div>
      </div>
    );
  }
}

// const CartDropdown = ({ cartItems, history, dispatch }) => (
//   <div className="cart-dropdown">
//     <div className="cart-items">
//       {cartItems.length ? (
//         cartItems.map(cartItem => (
//           <CartItem key={cartItem.id} item={cartItem} />
//         ))
//       ) : (
//         <span className="empty-message">Your cart is empty</span>
//       )}
//     </div>
//     <div className="cart-btns">
//       <CustomButton
//         isCancel
//         onClick={() => {
//           dispatch(emptyCart());
//         }}
//       >
//         Clear
//       </CustomButton>
//       <CustomButton
//         onClick={() => {
//           history.push('/checkout');
//           dispatch(toggleCartHidden());
//         }}
//       >
//         GO TO CHECKOUT
//       </CustomButton>
//     </div>
//   </div>
// );

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
