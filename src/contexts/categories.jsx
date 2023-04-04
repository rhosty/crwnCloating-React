import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../assets/shops/hats/shop-data.js'
import {getCategorisAndDocs} from '../utills/firebase/firebase'

export const CategoriesContext = createContext({
    categoriesMap : {},
})




export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // },[])

    useEffect(() => {
       
        const getCatergoriesMap = async () => {
            const categoriesMap = await getCategorisAndDocs()
            setCategoriesMap(categoriesMap)
         }
            getCatergoriesMap()
        }, []);

    const value = { categoriesMap }
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
//test