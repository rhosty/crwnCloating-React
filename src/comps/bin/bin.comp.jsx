
import { ReactComponent as TrashBin } from '../../assets/bin.svg';
import { useContext } from 'react';
import { CartInfoContext } from '../../contexts/cart.info.ctx';
import './bin.style.scss';

const Bin = ({ name, quantity, updateQuantity }) => {
  const { cartInfo, setCartInfo } = useContext(CartInfoContext);


  const removeHandler = () => {
    setCartInfo((prevCartInfo) => prevCartInfo.filter((item) => item.name !== name));
  };

  return <TrashBin onClick={removeHandler} className='bin' />;
};

export default Bin;

