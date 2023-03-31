import { createContext, useState, useContext, useEffect } from "react";
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
    cartCount: 0,
    totalPrice: 0,
    updatedAmount: 0,
})




  

  export const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] =useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
      const newCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
      setCartCount(newCount)
    }, [cartItems])

    useEffect(() => {
      const newPrice = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
      setTotalPrice(newPrice)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd))
    }

  

    const removeItemFromCart = (productToRemove) => {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== productToRemove.id))
    }

    const increaseAmount = (productToIncrease) => {
      setCartItems(cartItems.map((cartItem) => cartItem.id === productToIncrease.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem))
    }

    const decreaseAmount = (productToDecrease) => {
      setCartItems(cartItems.map((cartItem) => cartItem.id === productToDecrease.id && cartItem.quantity > 0 ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem))
    }

   

    const value = {isOpen, setIsOpen, addItemToCart, cartItems, setCartItems, cartCount, totalPrice, removeItemFromCart, increaseAmount, decreaseAmount };
  return(
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )  
}

