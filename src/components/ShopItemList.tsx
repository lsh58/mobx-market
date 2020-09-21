import React from 'react';
import ShopItem from './ShopItem';
import { useMarketStore } from '../stores/market';
import { useObserver } from 'mobx-react';
import { CartProductItem } from '../models';

const ShopItemList: React.FC = () => {
  const market = useMarketStore();
  return useObserver(() =>
    market.items ? (
      <>
        {market.items.map((item: CartProductItem) => (
          <ShopItem
            item={item}
            key={item.name}
            onPut={market.put}
            onToggle={market.toggle}
          />
        ))}
      </>
    ) : null,
  );
};

export default ShopItemList;
