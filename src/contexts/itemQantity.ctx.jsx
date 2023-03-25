import { createContext, useState } from "react";

export const ItemQuantityContext = createContext({
  itemQuantity: '',
});

export const ItemQuantityProvider = ({ children }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const value = { itemQuantity, setItemQuantity };

  return (
    <ItemQuantityContext.Provider value={value}>
      {children}
    </ItemQuantityContext.Provider>
  );
};
