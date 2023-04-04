import './cart-item-style.jsx'
import {CartItemContainer, CartItemImage, ItemDetails, ItemName} from './cart-item-style.jsx'

const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return(
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name}></CartItemImage>
            <ItemDetails>
                <ItemName className='name'>{name}</ItemName>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;