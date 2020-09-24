import { observable, action, computed } from "mobx";
import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";
import { ProductItem, BasketProductItem } from "../models";

export default class MarketStore {
  @observable selectedItems: BasketProductItem[] = [];

  @observable items = [
    {
      id: 1,
      name: "생수",
      price: 850,
      isInCart: false,
      count: 1,
    },
    {
      id: 2,
      name: "커피",
      price: 900,
      isInCart: false,
      count: 1,
    },
    {
      id: 3,
      name: "콜라",
      price: 1500,
      isInCart: false,
      count: 1,
    },
    {
      id: 4,
      name: "사이다",
      price: 1000,
      isInCart: false,
      count: 1,
    },
    {
      id: 5,
      name: "진라면",
      price: 1200,
      isInCart: false,
      count: 1,
    },
    {
      id: 6,
      name: "신라면",
      price: 1300,
      isInCart: false,
      count: 1,
    },
    {
      id: 7,
      name: "짜파게티",
      price: 1500,
      isInCart: false,
      count: 1,
    },
    {
      id: 8,
      name: "너구리",
      price: 1300,
      isInCart: false,
      count: 1,
    },
    {
      id: 9,
      name: "포카칩",
      price: 850,
      isInCart: false,
      count: 1,
    },
    {
      id: 10,
      name: "새우깡",
      price: 900,
      isInCart: false,
      count: 1,
    },
    {
      id: 11,
      name: "바나나킥",
      price: 1500,
      isInCart: false,
      count: 1,
    },
    {
      id: 12,
      name: "프링글스",
      price: 1000,
      isInCart: false,
      count: 1,
    },
  ];

  @observable productId = 0;

  @action
  put = (id: number): void => {
    // 존재하는지 찾고
    const exists = this.selectedItems.findIndex((item) => item.id === id);
    if (exists === -1) {
      // 존재하지 않는다면 새로 집어넣습니다.
      this.selectedItems.push({
        id,
        count: 1,
      });
      return;
    } else {
      this.selectedItems.splice(exists, 1); // 배열에서 제거처리합니다.
    }
  };

  @action
  take = (product: ProductItem): void => {
    const itemToTake = this.selectedItems.findIndex(
      (item) => item.id === product.id
    );
    this.selectedItems.splice(itemToTake, 1); // 배열에서 제거처리합니다.
    const itemToChange = this.items.find((item) => item.id === product.id);
    if (itemToChange) {
      //toggle
      itemToChange.isInCart = !itemToChange.isInCart;
    } //item중 selected에 담겨있는지 체크하게끔 바꾸면 분리가능
  };

  @action
  decrease = (product: ProductItem): void => {
    const itemToDecrease = this.selectedItems.find(
      (item) => item.id === product.id
    );
    if (itemToDecrease) {
      //-버튼이 눌리면 수량 1감소
      itemToDecrease.count--;
      if (itemToDecrease.count === 0) {
        // 갯수가 0 이면
        const itemToChange = this.items.find((item) => item.id === product.id);
        if (itemToChange) {
          //toggle
          itemToChange.isInCart = !itemToChange.isInCart;
        }
        const itemToTake = this.selectedItems.findIndex(
          (item) => item.id === product.id
        );
        this.selectedItems.splice(itemToTake, 1); // 배열에서 제거처리합니다.
      }
    }
  };

  @action
  increase = (product: ProductItem): void => {
    const itemToChange = this.selectedItems.find(
      (item) => item.id === product.id
    );
    if (itemToChange) {
      //+버튼이 눌리면 수량 1증가
      itemToChange.count++;
    }
  };

  @action
  toggle = (id: number) => {
    const itemToChange = this.items.find((item) => item.id === id);
    if (itemToChange) {
      //장바구니icon toggle
      itemToChange.isInCart = !itemToChange.isInCart;
    }
  };

  @action
  edit = (product: ProductItem, userName: string, price: number) => {
    const itemToEdit = this.items.find((item) => item.id === product.id);
    if (itemToEdit) {
      //변경된 이름으로 변경
      itemToEdit.name = userName;
      itemToEdit.price = price;
    }
  };

  @action
  add = (name: string, price: number) => {
    this.items.push({
      id: this.productId,
      name: name,
      price: price,
      isInCart: false,
      count: 1,
    });
    this.productId+=1;
  };

  @action
  clear = (product: ProductItem) => {
    const itemToClear = this.items.findIndex((item) => item.id === product.id);
    if (itemToClear>=0) {
      this.items.splice(itemToClear, 1); // 배열에서 제거처리합니다.
    }
  };

  @action
  nameOrder = () => {
    this.items = this.items.slice(0,this.items.length).sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
  };

  @action
  priceOrder = () => {
    this.items = this.items.slice(0,this.items.length).sort((a, b) => {
      return a.price - b.price;
    });
  };

  @computed
  get total(): number {
    let selectedArr = this.items.filter((item) => {
      //선택된 제품들 배열에 저장
      return this.selectedItems.find(
        (selectedItem) => selectedItem.id === item.id
      );
    });
    return this.selectedItems.reduce(
      //총합 계산
      (acc, selectedItem, i) => acc + selectedArr[i].price * selectedItem.count,
      0
    );
  }
}


export const useMarketStore = () => {
  const ctx = useContext(MobXProviderContext);
  return ctx.market as MarketStore;
};
