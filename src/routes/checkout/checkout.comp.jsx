

import { useContext, Fragment } from 'react';
import { CartInfoContext } from '../../contexts/cart.info.ctx';
import './checkout.style.scss';
import { ItemQuantityContext } from '../../contexts/itemQantity.ctx';



const Checkout = () => {
  const { cartInfo } = useContext(CartInfoContext);
  const { itemQuantity } = useContext(ItemQuantityContext);

  const getTotalPrice = () => {
    let total = 0;
    cartInfo.forEach((item) => {
      total += item.name.price * itemQuantity[item.name];
    });
    return total;
  }
    

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
        
    </div>
    <div className="total">
      <p>TOTAL: ${getTotalPrice()}</p>
    </div>
  </div>): (<h2>Your cart is empty</h2>)}
   </Fragment>
  );
};

export default Checkout;


