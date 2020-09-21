export interface ProductItem {
    id:number;
    name: string;
    price : number;
    isInCart : boolean;
}

export interface CartProductItem extends ProductItem {
    id:number;
    name: string;
    price : number;
    isInCart : boolean;
    count: number;
}

