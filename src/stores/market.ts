import { observable, action, computed } from 'mobx';
import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import { ProductItem, CartProductItem } from '../models'

export default class MarketStore {
  @observable selectedItems:CartProductItem[] = [];

  @action
  put = (name:string, price:number, isInCart:boolean) : void => {
    // 존재하는지 찾고
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
      // 존재하지 않는다면 새로 집어넣습니다.
      this.selectedItems.push({
        name,price,isInCart,
        count: 1,
      });
      return;
    }else{
      const itemToTake = this.selectedItems.findIndex(item => item.name === name);
      this.selectedItems.splice(itemToTake,1);// 배열에서 제거처리합니다.
    }
  };

  @action
  take = (product:ProductItem): void  => {
    const itemToTake = this.selectedItems.findIndex(item => item.name === product.name);
    this.selectedItems.splice(itemToTake,1);// 배열에서 제거처리합니다.
  };

  @action
  decrease = (product:ProductItem): void  => {
    const itemToChange = this.selectedItems.find(item => item.name === product.name);
    if(itemToChange){
      //-버튼이 눌리면 수량 1감소
      itemToChange.count--;
      if (itemToChange.count === 0) {
        const itemToTake = this.selectedItems.findIndex(item => item.name === product.name);
        // 갯수가 0 이면
        this.selectedItems.splice(itemToTake,1);// 배열에서 제거처리합니다.
    }
  }
  };

  @action
  increase = (product:ProductItem): void => {
    const itemToChange = this.selectedItems.find(item => item.name === product.name);
    if(itemToChange){
      //+버튼이 눌리면 수량 1증가
      itemToChange.count++;
  }
  };

  @action
  toggle = (product:ProductItem) => {
    console.log(product);
    const itemToChange = this.selectedItems.find(item => item.name === product.name);
    itemToChange?.isInCart = !itemToChange?.isInCart


    생수 === product 
  };

  @computed
  get total():number {
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
}

export const useMarketStore= ()=>{
  const ctx = useContext(MobXProviderContext);
  return ctx.market;
}