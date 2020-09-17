import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';

const SuperMarket = () => {
  return (
    <SuperMarketTemplate
      items={<ShopItemList />}
    />
  );
};

export default SuperMarket;