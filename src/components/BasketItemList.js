import React from 'react';
import BasketItem from './BasketItem';
import { inject, observer } from 'mobx-react';

const BasketItemList = ({ items, onTake, onIncrease, onDecrease }) => {
  const itemList = items.map(item => (
    <BasketItem item={item} key={item.name} onTake={onTake} onIncrease={onIncrease} onDecrease={onDecrease} />
  ));
  return <div>{itemList}</div>;
};

export default inject(({ market }) => ({
  items: market.selectedItems,
  onTake: market.take,
  onIncrease : market.increase,
  onDecrease : market.decrease
}))(observer(BasketItemList));