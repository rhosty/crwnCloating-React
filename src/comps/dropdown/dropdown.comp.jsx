

import { useContext, useState, Fragment, useEffect } from 'react';
import { CartInfoContext } from '../../contexts/cart.info.ctx';
import Button from '../button/button.comp';
import Bin from '../bin/bin.comp';
import './dropdown.style.scss';

const DropDown = () => {
  const { cartInfo } = useContext(CartInfoContext);
  const [filteredCartInfo, setFilteredCartInfo] = useState([]);

  useEffect(() => {
    cartInfo &&
      setFilteredCartInfo(
        cartInfo.filter(
          (item, index) => cartInfo.findIndex((i) => i.name === item.name) === index
        )
      );
  }, [cartInfo]);

  const itemFrequency = cartInfo ? cartInfo.reduce((freq, item) => {
    freq[item.name] = (freq[item.name] || 0) + 1;
    return freq;
  }, {}) : null;

  return (
    <Fragment>
      {cartInfo.length ? (
        <div className='container'>
          <div className='cart-dropdown-container'>
            {filteredCartInfo.map(({ name, price, imageUrl }) => (
              <div key={name} className='middle-container'>
                <img title='remove' src={imageUrl} alt={name} />
                <span>{name}</span>
                <span>({itemFrequency[name]})</span>
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
