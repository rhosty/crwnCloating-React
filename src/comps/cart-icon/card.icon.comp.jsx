import './card.icon.style.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/cart/shopping-bag.svg'
import { createContext, useContext, useState } from 'react'
import { CartContext } from '../../contexts/cart.ctx'


const CartIcon = () => {
    const {cartItems, cartCount} = useContext(CartContext)
    const {isOpen, setIsOpen} = useContext(CartContext)
    const toggleCart = () => setIsOpen(!isOpen);
    // const amount = cartItems.reduce((acc, item) => acc + item.quantity, 0)    

    return(
        <div onClick={toggleCart}  className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon