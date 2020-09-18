import React from 'react';
import BasketItem from './BasketItem';
import { useMarketStore } from '../stores/market';
import { useObserver } from 'mobx-react'
import { CartProductItem } from '../models';

const BasketItemList: React.FC = () => {
  const market = useMarketStore();
  return useObserver(()=> 
  market.selectedItems ? ( 
    <div>
      {market.selectedItems.map( (item:CartProductItem) => (
        <BasketItem item={item} key={item.name} onTake={market.take} onIncrease={market.increase} onDecrease={market.decrease} />
      ))}
    </div>)
    : null)
};

export default BasketItemList;