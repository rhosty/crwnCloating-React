
import './hats.shop.style.scss'
import { useContext, useState, Fragment } from 'react'
import { CategoriesContext } from '../../../contexts/categories'
import { CartInfoContext } from '../../../contexts/cart.info.ctx'
import ProductCard from '../../../comps/product card/product.card.comp'

const HatsShop = () => {
    const { categoriesMap} = useContext(CategoriesContext)
    const {hats, id} = categoriesMap
    console.log(categoriesMap)
    
    return(
        <Fragment>
        <div  className='shop-container'>
           <h1>Hats</h1> 
        <div  className='products-container'>
        
             {hats.map((product) => {
                return(
                    <ProductCard key={product.id}  product={product} />
                )})}
        </div>  
        </div>   
        </Fragment>
    )
}

export default HatsShop