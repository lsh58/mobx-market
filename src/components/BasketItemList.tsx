import React from 'react';
import BasketItem from './BasketItem';
import { inject, observer } from 'mobx-react';
import { CartProductItem, ProductItem } from '../models';


interface BasketItemProps {
  items?: CartProductItem[];
  onTake?: (product: ProductItem) => void;
  onIncrease?: (product: ProductItem) => void;
  onDecrease?: (product: ProductItem) => void;
}

const BasketItemList: React.FC<BasketItemProps>  = ({ items, onTake, onIncrease, onDecrease }) => {
  if(items)return( 
  <div>
    {items.map( item => (
    <BasketItem item={item} key={item.name} onTake={onTake} onIncrease={onIncrease} onDecrease={onDecrease} />
  ))}
  </div>);
  return null;
};

export default inject(({ market }) => ({
  items: market.selectedItems,
  onTake: market.take,
  onIncrease : market.increase,
  onDecrease : market.decrease
}))(observer(BasketItemList));