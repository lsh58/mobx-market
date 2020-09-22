import React from "react";
import BasketItem from "./BasketItem";
import { useMarketStore } from "../stores/market";
import { useObserver } from "mobx-react";
import { ProductItem, BasketProductItem } from "../models";

const BasketItemList: React.FC = () => {
  const market = useMarketStore();
  return useObserver(() => (
    <ul>
      {market.items
        .filter((item: ProductItem) => {
          return market.selectedItems.find(
            (selectedItem: BasketProductItem) => selectedItem.id === item.id
          );
        })
        .map((item: ProductItem) => (
          <BasketItem
            item={item}
            key={item.id}
            onTake={market.take}
            onIncrease={market.increase}
            onDecrease={market.decrease}
            onToggle={market.toggle}
          />
        ))}
    </ul>
  ));
};

export default BasketItemList;
