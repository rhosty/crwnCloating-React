import './dropdown.style.scss'
import Button from '../button/button.comp'
import { useContext, useState, Fragment } from 'react'
import { CartInfoContext } from '../../contexts/cart.info.ctx'
import Bin from '../bin/bin.comp'
import ProductCard from '../product card/product.card.comp'

const DropDown = () => {
  const { cartInfo } = useContext(CartInfoContext);
  return (
    <Fragment>
      {cartInfo.length  ? (
        // <ProductCard />
        <div className='container'>
          <div className='cart-dropdown-container'> 
            {cartInfo.map(({ name, price, imageUrl }) => (
              <div key={name} className='middle-container'>
                <img title='remove' src={imageUrl} alt={name} />
                <span>{name}</span>
                <span>{price}</span>
                <Bin />
              </div>
            ))}
            <Button buttonType='inverted'>Checkout</Button>
          </div>
        </div>
      ) : (
        <div className='container'>
        <div className='cart-dropdown-container'> 
         <h2>Your Cart Is Empty</h2>
          <Button buttonType='inverted'>Checkout</Button>
        </div>
      </div>
      )}
    </Fragment>
  );
};

export default DropDown;

  
