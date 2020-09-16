import { observable, action, computed } from 'mobx';
import { ProductItem, CartProductItem } from '../models'

export default class MarketStore {
  @observable selectedItems:CartProductItem[] = [];

  @action
  put = (name:string, price:number) => {
    // 존재하는지 찾고
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
      // 존재하지 않는다면 새로 집어넣습니다.
      this.selectedItems.push({
        name,price,
        count: 1,
      });
      return;
    }
  };

  @action
  take = (product:ProductItem): void  => {
    const itemToTake = this.selectedItems.findIndex(item => item.name !== product.name);
    this.selectedItems.splice(itemToTake,1);// 배열에서 제거처리합니다.
  };

  @action
  decrease = (product:ProductItem): void  => {
    const itemToChange = this.selectedItems.find(item => item.name === product.name);
    if(itemToChange){
      itemToChange.count--;
    if (itemToChange.count === 0) {
      // 갯수가 0 이면
      const itemToTake = this.selectedItems.findIndex(item => item.name !== product.name);
      this.selectedItems.splice(itemToTake-1,1);// 배열에서 제거처리합니다.
    }}
  }; //문제

  @action
  increase = (product:ProductItem): void => {
    const itemToChange = this.selectedItems.find(item => item.name === product.name);
    if(itemToChange){
      itemToChange.count++;
  }
  };

  @computed
  get total() {
    console.log('총합 계산...');
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
}