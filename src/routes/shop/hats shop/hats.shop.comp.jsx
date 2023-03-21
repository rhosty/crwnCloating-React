
import './hats.shop.style.scss'
import { useContext, useState } from 'react'
import { ProductContext } from '../../../contexts/products.ctx'
import { CartInfoContext } from '../../../contexts/cart.info.ctx'
import ProductCard from '../../../comps/product card/product.card.comp'

const HatsShop = () => {
    const {products} = useContext(ProductContext)
    return(
        <div  className='shop-container'>
           <h1>Hats</h1> 
        <div  className='products-container'>
        
             {products.map((product) => {
                return(
                    <ProductCard  product={product} />
                )})}
        </div>  
        </div>   
    )
}

export default HatsShop