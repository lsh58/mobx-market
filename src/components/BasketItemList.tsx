import React from 'react';
import BasketItem from './BasketItem';
import { useMarketStore } from '../stores/market';
import { useObserver } from 'mobx-react'

function useUserData() {
  const ctx = useMarketStore()
  return useObserver(()=>({
    items: ctx.selectedItems,
    onTake: ctx.take,
    onIncrease : ctx.increase,
    onDecrease : ctx.decrease
  }))
}

const BasketItemList: React.FC = () => {
  const { items, onTake, onIncrease, onDecrease } = useUserData()
  return useObserver(()=> 
  items ? ( 
    <div>
      {items.map( (item:any) => (
        <BasketItem item={item} key={item.name} onTake={onTake} onIncrease={onIncrease} onDecrease={onDecrease} />
      ))}
    </div>)
    : null)
};

export default BasketItemList;