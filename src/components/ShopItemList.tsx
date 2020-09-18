import React from 'react';
import ShopItem from './ShopItem';
import { useMarketStore } from '../stores/market';
import { useObserver } from 'mobx-react'

function useUserData() {
  const ctx = useMarketStore()
  return useObserver(()=>({
    onPut : ctx.put
  }))
}

const items = [
  {
    name: '생수',
    price: 850,
  },
  {
    name: '커피',
    price: 900,
  },
  {
    name: '콜라',
    price: 1500,
  },
  {
    name: '사이다',
    price: 1000,
  },
  {
    name: '진라면',
    price: 1200,
  },
  {
    name: '신라면',
    price: 1300,
  },
  {
    name: '짜파게티',
    price: 1500,
  },
  {
    name: '너구리',
    price: 1300,
  },
  {
    name: '포카칩',
    price: 850,
  },
  {
    name: '새우깡',
    price: 900,
  },
  {
    name: '바나나킥',
    price: 1500,
  },
  {
    name: '프링글스',
    price: 1000,
  },
];

// **** onPut 함수 추가됨
const ShopItemList = () => {
  const { onPut } = useUserData()
  const itemList = items.map(item => (
    <ShopItem {...item} key={item.name} onPut={onPut} />
  ));
  return useObserver(()=> (
    <>{itemList}</>
  ));
};

export default ShopItemList;