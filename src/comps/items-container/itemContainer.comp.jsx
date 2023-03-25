import React from 'react';
import Bin from '../bin/bin.comp';
import { CartInfoContext } from '../../contexts/cart.info.ctx';
import { ItemQuantityContext } from '../../contexts/itemQantity.ctx';
import { useContext, useState } from 'react';

const ItemsContainer = ({ filteredCartInfo = [], quantity = {}, updateQuantity }) => {
    const { cartInfo } = useContext(CartInfoContext);
    const { itemQuantity } = useContext(ItemQuantityContext);
  return (
    <div className='items-container'>
      {filteredCartInfo && filteredCartInfo.map(({ name, price, imageUrl }) => (
        <div key={name} value={name} className='middle-container'>
          <img title='remove' src={imageUrl} alt={name} />
          <span>{name}</span>
          <span>({quantity[name]})</span>
          <span>{price}</span>
          <Bin name={name} quantity={quantity[name]} updateQuantity={updateQuantity} />
        </div>
      ))}
    </div>
  );
};

export default ItemsContainer;
