import './card.icon.style.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/cart/shopping-bag.svg'
import { createContext, useContext } from 'react'
import { CartContext } from '../../contexts/cart.ctx'

const CartIcon = () => {

    const {isOpen, setIsOpen} = useContext(CartContext)
    const toggleCart = () => setIsOpen(!isOpen);

    return(
        <div onClick={toggleCart}  className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon