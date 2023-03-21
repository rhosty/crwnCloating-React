import { createContext, useState } from "react";

export const CartInfoContext = createContext({
    cartInfo: {
        name: [],
        price: [],
        imageUrl: [],
        quyntiy: [],
        }
  })

export const CartInfoProvider = ({children}) => {
    const [cartInfo, setCartInfo] = useState('')
    const value = {cartInfo, setCartInfo};
    
    return(
        <CartInfoContext.Provider value={value}>{children}</CartInfoContext.Provider>
    )
}




