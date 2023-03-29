import { CartInfoContext } from "../../contexts/cart.info.ctx"
import { useContext, useState, useEffect } from "react"
import { ItemQuantityContext } from "../../contexts/itemQantity.ctx"
import './cartlist.style.scss'
  
const CartLis = () => {

    const { cartInfo } = useContext(CartInfoContext)
    const { itemQuantity } = useContext(ItemQuantityContext)
    const [quantity, setQuantity] = useState({});
    const {imageUrl, name, price} = cartInfo
    const [filteredCartInfo, setFilteredCartInfo] = useState([]);

    console.log(itemQuantity)

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

    return(
        <div className='checkout-container'>
          {filteredCartInfo.map(({imageUrl, name, price}) => (
            
                <div className='item-container'>    
                <img src={imageUrl}></img>
                <p>{name}</p>
                <p>{price}</p>
                <p>{quantity[name]}</p>
                
                </div>
            
            )
        )}
        </div>
    )
}

export default CartLis