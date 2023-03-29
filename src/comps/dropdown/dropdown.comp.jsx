import { useContext, useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartInfoContext } from '../../contexts/cart.info.ctx';
import Button from '../button/button.comp';
import Bin from '../bin/bin.comp';
import './dropdown.style.scss';
import { ItemQuantityContext } from '../../contexts/itemQantity.ctx';
import { CartContext } from '../../contexts/cart.ctx';
import Minus from '../../assets/plusminus/minus.svg'
import Plus from '../../assets/plusminus/plus.svg'


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

    const {isOpen, setIsOpen} = useContext(CartContext)
    const closeCart = () => setIsOpen(false);


    const increaseQuantityHandler = (name) => {
      setQuantity(prevQuantity => ({
        ...prevQuantity,
        [name]: prevQuantity[name] + 1
      }));
    }

    const decreaseQuantityHandler = (name) => {
      if (quantity[name] > 1) {
        setQuantity(prevQuantity => ({
          ...prevQuantity,
          [name]: prevQuantity[name] - 1
        }));
      } else if ( quantity[name] < 1){
        
      }
    };

    // const decreaseQuantityHandler = (name) => {
    //   const updatedQuantity = quantity[name] - 1;
    //   if (updatedQuantity > 0) {
    //     setQuantity(prevQuantity => ({
    //       ...prevQuantity,
    //       [name]: updatedQuantity
    //     }));
    //   } else {
    //     const filteredItems = cartInfo.filter(item => item.name !== name);
    //     setFilteredCartInfo(filteredItems);
    //     const updatedQuantity = { ...quantity };
    //     delete updatedQuantity[name];
    //     setQuantity(updatedQuantity);
    //   }
    // };
    
    
    
    
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
                <img onClick={() => decreaseQuantityHandler(name)} src={Minus}></img>
                <span>({quantity[name]})</span>
                <img onClick={() => increaseQuantityHandler(name)} src={Plus} alt="Increase Quantity" />
                <span>{price}</span>
                <Bin name={name} quantity={quantity[name]} updateQuantity={updateQuantity} />
              </div>
            ))}
            </div>
            <Link to='/checkout'>
            <Button onClick={closeCart} buttonType='inverted'>Checkout</Button>
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

