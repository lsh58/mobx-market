import React from 'react';
import ShopItem from './ShopItem';
import { useMarketStore } from '../stores/market';
import { useObserver } from 'mobx-react'

const items = [
  {
    name: '생수',
    price: 850,
    isInCart: false,
  },
  {
    name: '커피',
    price: 900,
    isInCart: false,
  },
  {
    name: '콜라',
    price: 1500,
    isInCart: false,
  },
  {
    name: '사이다',
    price: 1000,
    isInCart: false,
  },
  {
    name: '진라면',
    price: 1200,
    isInCart: false,
  },
  {
    name: '신라면',
    price: 1300,
    isInCart: false,
  },
  {
    name: '짜파게티',
    price: 1500,
    isInCart: false,
  },
  {
    name: '너구리',
    price: 1300,
    isInCart: false,
  },
  {
    name: '포카칩',
    price: 850,
    isInCart: false,
  },
  {
    name: '새우깡',
    price: 900,
    isInCart: false,
  },
  {
    name: '바나나킥',
    price: 1500,
    isInCart: false,
  },
  {
    name: '프링글스',
    price: 1000,
    isInCart: false,
  },
];


const ShopItemList = () => {
  const market = useMarketStore();
  const itemList = items.map(item => (
    <ShopItem {...item} key={item.name} onPut={market.put} onToggle={market.toggle} />
  ));
  return useObserver(()=> (
    <>{itemList}</>
  ));
};

export default ShopItemList;