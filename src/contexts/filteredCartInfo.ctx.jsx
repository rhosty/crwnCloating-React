import { createContext, useState } from "react";

export const FilteredCartInfoContext = createContext({
    filteredCartInfo: {
        name: [],
        price: [],
        imageUrl: [],
        quantity: [],
        }
  })

export const FilteredCartInfoProvider = ({children}) => {
    const [filteredCartInfo, setFilteredCartInfo] = useState('')
    const value = {filteredCartInfo, setFilteredCartInfo};
    
    return(
        <FilteredCartInfoContext.Provider value={value}>{children}</FilteredCartInfoContext.Provider>
    )
}