import { CartInfoContext } from "../../contexts/cart.info.ctx"
import { useContext, useState, useEffect } from "react"
import { ItemQuantityContext } from "../../contexts/itemQantity.ctx"
const CartLis = () => {

    const { cartInfo } = useContext(CartInfoContext)
    const { itemQuantity } = useContext(ItemQuantityContext)
    const [quantity, setQuantity] = useState({});
    const {imageUrl, name, price} = cartInfo
    console.log(itemQuantity)


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
        <div>{cartInfo.map(({imageUrl, name, price}) => (
            
                <div>    
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