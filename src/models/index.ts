export interface ProductItem {
    name: string;
    price : number;
}

export interface CartProductItem extends ProductItem {
    count: number;
}

