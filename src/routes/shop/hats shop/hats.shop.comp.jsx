
import './hats.shop.style.scss'
import { useContext } from 'react'
import { ProductContext } from '../../../contexts/products.ctx'

const HatsShop = () => {
    const {products} = useContext(ProductContext)
    return(
        <div className='shop-container'>
           <h1>Hats</h1> 
        <div className='card-container'>
        
             {products.map(({id, name, imageUrl, price}) => {
                return(
                    <div className='card' key={id}>
                    <img src={imageUrl}></img>
                    <div className='card-info-container'>
                        <h4>{name}</h4>
                        <p>{price}</p>

                    </div>
                </div>
                )})}
        </div>  
        </div>   
    )
}

export default HatsShop