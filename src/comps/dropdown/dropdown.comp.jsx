import { useContext, useState, Fragment, useEffect,  } from 'react';
import { Link } from 'react-router-dom';
import { CartInfoContext } from '../../contexts/cart.info.ctx';
import Button from '../button/button.comp';
import './dropdown.style.scss';
import { CartContext } from '../../contexts/cart.ctx';
import CartItem from '../cart-item/cart.item.comp';
import { useNavigate } from 'react-router-dom';



const DropDown = () => {
  
 
    const {cartItems, isOpen, setIsOpen} = useContext(CartContext);
    const closeCart = () => setIsOpen(false);
  
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout')}
   
  return (
    
    <div className='cart-dropdown-container'>
      <div className='cart-items'>

        {cartItems.length  ? 
        cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))
          : <span className='empty-message'>Your cart is empty</span>}
      </div>
      <Link to='checkout'>
      <Button  onClick={closeCart} buttonType='inverted'>Checkout</Button>
      </Link>
    </div>      
  );
};

export default DropDown;

