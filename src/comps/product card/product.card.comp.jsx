import './product.card.style.scss'
import Button from '../button/button.comp'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.ctx';

const ProductCard = ({product}) => {
      const { name, price, imageUrl, quantity } = product;
      const { addItemToCart } = useContext(CartContext)    
      
      const addProductToCart = () => addItemToCart(product);

      return (
          <div key={name} className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
              <span className='name'>{name}</span>
              <span className='price'>{price}</span>
            </div>
            <Button onClick={addProductToCart} buttonType='inverted'>Add to cart</Button>
          </div>
        );
};


export default ProductCard;
