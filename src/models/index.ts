export interface ProductItem {
  id: number;
  name: string;
  price: number;
  isInCart: boolean;
}

export interface BasketProductItem {
  id: number;
  count: number;
}

export interface ProductComment {
  id:number;
  productId: number;
  userName: string;
  comment : string;
}
