import './card.icon.style.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/cart/shopping-bag.svg'
import { createContext, useContext } from 'react'
import { CartContext } from '../../contexts/cart.ctx'
import { CartInfoContext } from '../../contexts/cart.info.ctx'

const CartIcon = () => {

    const { cartInfo } = useContext(CartInfoContext);
    const {isOpen, setIsOpen} = useContext(CartContext)
    const toggleCart = () => setIsOpen(!isOpen);
    
    

    return(
        <div onClick={toggleCart}  className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartInfo.length}</span>
        </div>
    )
}

export default CartIcon