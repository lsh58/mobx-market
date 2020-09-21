import React from 'react';
import ShopItem from './ShopItem';
import { useMarketStore } from '../stores/market';
import { useObserver } from 'mobx-react';
import { CartProductItem } from '../models';

const ShopItemList: React.FC = () => {
  const market = useMarketStore();
  return useObserver(() =>
      <>
        {market.items.map((item: CartProductItem) => (
          <ShopItem
            item={item}
            key={item.id}
            onPut={market.put}
            onToggle={market.toggle}
          />
        ))}
      </>
  );
};

export default ShopItemList;
