export interface ProductItem {
    name: string;
    price : number;
    isInCart : boolean;
}

export interface CartProductItem extends ProductItem {
    name: string;
    price : number;
    isInCart : boolean;
    count: number;
}

