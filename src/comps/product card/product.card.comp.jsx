import './product.card.style.scss'
import Button from '../button/button.comp'
import { useContext, useState, useEffect } from 'react';
import { CartInfoContext } from '../../contexts/cart.info.ctx';

const ProductCard = ({product}) => {
      const { name, price, imageUrl, quantity } = product;
      const {cartInfo, setCartInfo} = useContext(CartInfoContext)
      

     

      // const addToCart = () => {
      //   setCartInfo({name, price, imageUrl})
      // }

      const addToCart = () => {
        const newProduct = { name, price, imageUrl, quantity };
        const updatedCartInfo = [...cartInfo, newProduct];
        console.log(cartInfo)
        setCartInfo(updatedCartInfo);
        
        
      }

        return (
          <div key={name} className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
              <span className='name'>{name}</span>
              <span className='price'>{price}</span>
            </div>
            <Button onClick={addToCart} buttonType='inverted'>Add to card</Button>
          </div>
        );
      };


export  default ProductCard
