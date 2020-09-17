export interface ProductItem {
    name: string;
    price : number;
}

export interface CartProductItem extends ProductItem {
    name: string;
    price : number;
    count: number;
}

