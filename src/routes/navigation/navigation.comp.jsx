import { Fragment, useContext, useState, useEffect } from "react"
import { auth } from "../../utills/firebase/firebase"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Crown} from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.ctx"
import './navigation.style.scss'
import { signoutUser } from "../../utills/firebase/firebase"
import  CartIcon  from '../../comps/cart-icon/card.icon.comp'
import DropDown from "../../comps/dropdown/dropdown.comp"
import { CartContext } from "../../contexts/cart.ctx"


const Navigation = () => {
   

    const { currentUser } = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false);

    const signOutHandler = () => {
        signoutUser()
    }

    const toogleHandler = () => {
       setIsOpen(!isOpen)
    }
  
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                <Crown className="Logo" />
                </Link>
                
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to='/contact'>
                        CONTACT
                    </Link>
                    {
                        currentUser ? (
                            <span onClick={signOutHandler} className="nav-link">Sign Out</span>)
                            : (<Link className="nav-link" to='/auth'>
                            SIGN IN
                        </Link>)
                        
                    }
                    <CartIcon toogleHandler={toogleHandler}>
                        
                    </CartIcon>
                    
                </div>
                {
                    isOpen ?(<DropDown />) : ''
                }
                
            </div>
            <Outlet />
        </Fragment>
        
    )
}

export default Navigation


