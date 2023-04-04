import { Fragment, useContext, useState, useEffect } from "react";
import { auth } from "../../utills/firebase/firebase";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.ctx";
// import './navigation.style.scss'
import { signoutUser } from "../../utills/firebase/firebase";
import CartIcon from "../../comps/cart-icon/card.icon.comp";
import DropDown from "../../comps/dropdown/dropdown.comp";
import { CartContext } from "../../contexts/cart.ctx";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLinks,
} from "./navigation.style";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  const signOutHandler = () => {
    signoutUser();
  };

  const toogleHandler = () => {};

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crown className="Logo" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLinks to="/shop">SHOP</NavLinks>
          <NavLinks to="/contact">CONTACT</NavLinks>
          {currentUser ? (
            <NavLinks onClick={signOutHandler}>Sign Out</NavLinks>
          ) : (
            <NavLinks to="/auth">SIGN IN</NavLinks>
          )}
          <CartIcon toogleHandler={toogleHandler}></CartIcon>
        </NavLinksContainer>
      </NavigationContainer>
      {isOpen && <DropDown />}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
