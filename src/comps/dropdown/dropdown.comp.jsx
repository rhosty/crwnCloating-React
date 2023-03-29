import { useContext, useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartInfoContext } from '../../contexts/cart.info.ctx';
import Button from '../button/button.comp';
import Bin from '../bin/bin.comp';
import './dropdown.style.scss';
import { ItemQuantityContext } from '../../contexts/itemQantity.ctx';

const DropDown = () => {
  const { cartInfo } = useContext(CartInfoContext);
  const { itemQuantity } = useContext(ItemQuantityContext);
  const [filteredCartInfo, setFilteredCartInfo] = useState([]);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    cartInfo &&
      setFilteredCartInfo(
        cartInfo.filter(
          (item, index) => cartInfo.findIndex((i) => i.name === item.name) === index
        )
      );
  }, [cartInfo]);

  useEffect(() => {
    setQuantity(
      cartInfo
        ? cartInfo.reduce((freq, item) => {
            freq[item.name] = (freq[item.name] || 0) + 1;
            return freq;
          }, {})
        : {}
    );
  }, [cartInfo]);

  const updateQuantity = (name, newQuantity) => {
    setQuantity((prevQuantity) => ({ ...prevQuantity, [name]: newQuantity }));
  };

  return (
    <Fragment>
      {cartInfo.length ? (
        <div className='container'>
          <div className='cart-dropdown-container'>
            <h2>Shopping Cart</h2>
            <div className='items-container'>
            {filteredCartInfo.map(({ name, price, imageUrl }) => (
              <div key={name} value={name} className='middle-container'>
                <img title='remove' src={imageUrl} alt={name} />
                <span>{name}</span>
                <span>({quantity[name]})</span>
                <span>{price}</span>
                <Bin name={name} quantity={quantity[name]} updateQuantity={updateQuantity} />
              </div>
            ))}
            </div>
            <Link to='/checkout'>
            <Button buttonType='inverted'>Checkout</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className='container'>
          <div className='cart-dropdown-container closed'>
            <h2>Your Cart Is Empty</h2>  
            <Link to='/checkout'>
            <Button buttonType='inverted'>Checkout</Button>
            </Link>       
          </div>
         
        </div>
      )}
    </Fragment>
  );
};

export default DropDown;
