import { createContext, useState, useContext } from "react";
import { CartInfoContext } from "./cart.info.ctx";



export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};


  export const CartContext = createContext({
    isOpen: true,
    setIsOpen: () => {}, 
    cartItems: [],
    addItemToCart: () => {},
})


  

  export const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] =useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {isOpen, setIsOpen, addItemToCart, cartItems};
  return(
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )  
}

