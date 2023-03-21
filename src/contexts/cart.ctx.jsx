import { createContext, useState } from "react";

export const CartContext = createContext({
    isOpen: false, 
})

export const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const value = { isOpen }
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}