import { observable, action, computed } from 'mobx';
import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import { ProductItem, CartProductItem } from '../models';

export default class MarketStore {
  @observable selectedItems: CartProductItem[] = [];

  @observable items = [
    {
      id:1,
      name: '생수',
      price: 850,
      isInCart: false,
    },
    {
      id:2,
      name: '커피',
      price: 900,
      isInCart: false,
    },
    {
      id:3,
      name: '콜라',
      price: 1500,
      isInCart: false,
    },
    {
      id:4,
      name: '사이다',
      price: 1000,
      isInCart: false,
    },
    {
      id:5,
      name: '진라면',
      price: 1200,
      isInCart: false,
    },
    {
      id:6,
      name: '신라면',
      price: 1300,
      isInCart: false,
    },
    {
      id:7,
      name: '짜파게티',
      price: 1500,
      isInCart: false,
    },
    {
      id:8,
      name: '너구리',
      price: 1300,
      isInCart: false,
    },
    {
      id:9,
      name: '포카칩',
      price: 850,
      isInCart: false,
    },
    {
      id:10,
      name: '새우깡',
      price: 900,
      isInCart: false,
    },
    {
      id:11,
      name: '바나나킥',
      price: 1500,
      isInCart: false,
    },
    {
      id:12,
      name: '프링글스',
      price: 1000,
      isInCart: false,
    },
  ];

  @action
  put = (id:number, name: string, price: number, isInCart: boolean): void => {
    // 존재하는지 찾고
    const exists = this.selectedItems.find((item) => item.name === name);
    if (!exists) {
      // 존재하지 않는다면 새로 집어넣습니다.
      this.selectedItems.push({
        id,
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
    const itemToDecrease = this.selectedItems.find(
      (item) => item.name === product.name,
    );
    if (itemToDecrease) {
      //-버튼이 눌리면 수량 1감소
      itemToDecrease.count--;
      if (itemToDecrease.count === 0) {
        const itemToChange = this.items.find((item) => item.name === product.name);
        if (itemToChange) {
          //toggle
          itemToChange.isInCart = !itemToChange.isInCart;
        }
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
  toggle = (product: ProductItem) => {
    const itemToChange = this.items.find((item) => item.name === product.name);
    if (itemToChange) {
      itemToChange.isInCart = !itemToChange.isInCart;
    }
  };

  @action
  edit = (product: ProductItem,name:string,price:number) => {
    const itemToEdit = this.items.find((item) => item.name === product.name);
    if (itemToEdit) {
      itemToEdit.name = name;
      itemToEdit.price = price;
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
