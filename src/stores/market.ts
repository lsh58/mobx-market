import { observable, action, computed } from 'mobx';
import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import { ProductItem, CartProductItem } from '../models';

export default class MarketStore {
  @observable selectedItems: CartProductItem[] = [];

  @observable items = [
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

  @action
  put = (name: string, price: number, isInCart: boolean): void => {
    // 존재하는지 찾고
    const exists = this.selectedItems.find((item) => item.name === name);
    if (!exists) {
      // 존재하지 않는다면 새로 집어넣습니다.
      this.selectedItems.push({
        name,
        price,
        isInCart,
        count: 1,
      });
      return;
    } else {
      const itemToTake = this.selectedItems.findIndex(
        (item) => item.name === name,
      );
      this.selectedItems.splice(itemToTake, 1); // 배열에서 제거처리합니다.
    }
  };

  @action
  take = (product: ProductItem): void => {
    const itemToTake = this.selectedItems.findIndex(
      (item) => item.name === product.name,
    );
    this.selectedItems.splice(itemToTake, 1); // 배열에서 제거처리합니다.
  };

  @action
  decrease = (product: ProductItem): void => {
    const itemToChange = this.selectedItems.find(
      (item) => item.name === product.name,
    );
    if (itemToChange) {
      //-버튼이 눌리면 수량 1감소
      itemToChange.count--;
      if (itemToChange.count === 0) {
        const itemToTake = this.selectedItems.findIndex(
          (item) => item.name === product.name,
        );
        // 갯수가 0 이면
        this.selectedItems.splice(itemToTake, 1); // 배열에서 제거처리합니다.
      }
    }
  };

  @action
  increase = (product: ProductItem): void => {
    const itemToChange = this.selectedItems.find(
      (item) => item.name === product.name,
    );
    if (itemToChange) {
      //+버튼이 눌리면 수량 1증가
      itemToChange.count++;
    }
  };

  @action
  toggle = (name: string) => {
    const itemToChange = this.items.find((item) => item.name === name);
    console.log(itemToChange);
    if (itemToChange) {
      itemToChange.isInCart = !itemToChange.isInCart;
    }
  };

  @computed
  get total(): number {
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
}

export const useMarketStore = () => {
  const ctx = useContext(MobXProviderContext);
  return ctx.market;
};
