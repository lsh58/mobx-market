import React from 'react';
import BasketTemplate from './BasketTemplate';
import BasketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

const Basket: React.FC  = () => {
  return (
    <BasketTemplate
      basket={<BasketItemList />}
      total={<TotalPrice/>}
    />
  );
};

export default Basket;