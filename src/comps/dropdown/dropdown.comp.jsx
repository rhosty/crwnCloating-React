import { useContext, useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartInfoContext } from '../../contexts/cart.info.ctx';
import Button from '../button/button.comp';
import './dropdown.style.scss';
import { CartContext } from '../../contexts/cart.ctx';
import CartItem from '../cart-item/cart.item.comp';



const DropDown = () => {
  
 
    const {cartItems} = useContext(CartContext)
  
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>

        {cartItems.length ? 
        cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))
          : <span className='empty-message'>Your cart is empty</span>}
      </div>
      <Button buttonType='inverted'>Checkout</Button>
    </div>      
  );
};

export default DropDown;

