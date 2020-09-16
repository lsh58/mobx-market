import React from 'react';
import BasketTemplate from './BasketTemplate';
import BasketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

const Basket = () => {
  return (
    <BasketTemplate
      basket={<BasketItemList />}
      total={<TotalPrice total/>}
    />
  );
};

export default Basket;