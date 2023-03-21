import './dropdown.style.scss'
import Button from '../button/button.comp'



const DropDown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-item'></div>
            <Button buttonType='inverted'>Checkout</Button>

        </div>
    )
}

export default DropDown