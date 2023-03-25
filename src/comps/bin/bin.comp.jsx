
import { ReactComponent as TrashBin } from '../../assets/bin.svg';
import { useContext } from 'react';
import { CartInfoContext } from '../../contexts/cart.info.ctx';
import './bin.style.scss';

const Bin = ({ name, quantity, updateQuantity }) => {
  const { cartInfo, setCartInfo } = useContext(CartInfoContext);

  const removeHandler = () => {
    const newCartInfo = [...cartInfo];
    const index = newCartInfo.findIndex((item) => item.name === name);
  
    if (index !== -1) {
      const item = newCartInfo[index];
  
      if (item.quantity > 0) {
        item.quantity--;
        updateQuantity(item.name, item.quantity);
      } else {
        newCartInfo.splice(index, 1);
        setCartInfo(newCartInfo);
      }
    }
  };

  return <TrashBin onClick={removeHandler} className='bin' />;
};

export default Bin;

