

import { useContext, Fragment } from 'react';
import { CartInfoContext } from '../../contexts/cart.info.ctx';
import './checkout.style.scss';
import { ItemQuantityContext } from '../../contexts/itemQantity.ctx';
import { CartContext } from '../../contexts/cart.ctx';
import CartItem from '../../comps/cart-item/cart.item.comp'
import More from '../../assets/greater.png'
import Less from '../../assets/smaller.png'
import Close from '../../assets/close.png'
import CheckOutItem from '../../comps/checkout-item/checkout.item.comp';


const Checkout = () => {
  const { cartItems, cartCount, totalPrice, setCartItems, removeItemFromCart, increaseAmount, decreaseAmount  } = useContext(CartContext);
  const { itemQuantity } = useContext(ItemQuantityContext);


 


    

  return (
    <Fragment>
    {cartItems.length ? ( <div className='checkout-container'>
    <div className="checkout-header">
            
            <div className='header-block'>
              <span>Product</span>
            </div>
            <div className='header-block'>
              <span>Description</span>
            </div>
            <div className='header-block'>
              <span>Quantity</span>
            </div>
            <div className='header-block'>
              <span>Price</span>
            </div>
            <div className='header-block'>
              <span>Remove</span>
            </div>
          
    </div>
    <div>
      {cartItems.map((cartItem) => 
        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>      
      )}
    </div>
      <span className='total'>TOTAL: €{totalPrice}</span>
   
  </div>): (<h2>Your cart is empty</h2>)}
   </Fragment>
  );
};

export default Checkout;


