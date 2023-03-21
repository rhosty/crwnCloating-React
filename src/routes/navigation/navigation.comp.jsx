import { Fragment, useContext, useState, useEffect } from "react"
import { auth } from "../../utills/firebase/firebase"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Crown} from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.ctx"
import './navigation.style.scss'
import { signoutUser } from "../../utills/firebase/firebase"
import  CartIcon  from '../../comps/cart-icon/card.icon.comp'


const Navigation = () => {
   

    const  { currentUser } = useContext(UserContext)
    
    const signOutHandler = () => {
        signoutUser()
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
                    <CartIcon />
                    
                </div>
            </div>
            <Outlet />
        </Fragment>
        
    )
}

export default Navigation


