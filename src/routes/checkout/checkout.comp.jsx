

import { useContext, Fragment } from 'react';
import { CartInfoContext } from '../../contexts/cart.info.ctx';
import{ ItemQuantityContext } from '../../contexts/itemQantity.ctx';
import CartLis from '../../comps/cart-list/cart.list.comp';
import './checkout.style.scss';
import ItemsContainer from '../../comps/items-container/itemContainer.comp';


const Checkout = () => {
  const { cartInfo, setCartInfo } = useContext(CartInfoContext);
    const { itemQuantity, setItemQuantity } = useContext(ItemQuantityContext);

  return (
    <Fragment>
    {cartInfo.length ? ( <div className='checkout'>
    <div className="checkout-header">
      <p>Product</p>
      <p>Description</p>
      <p>Quantity</p>
      <p>Price</p>
      <p>Remove</p>
    </div>
    <div>
        <CartLis />
    </div>
  </div>): (<h2>Your cart is empty</h2>)}
   </Fragment>
  );
};

export default Checkout;


