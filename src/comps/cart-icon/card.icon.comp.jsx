import './card.icon.style.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/cart/shopping-bag.svg'

const CartIcon = ({toogleHandler}) => {
    return(
        <div onClick={toogleHandler} className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon