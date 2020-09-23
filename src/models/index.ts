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


// 기능 추가 요청
// 1. 상품 추가/삭제 기능
// 2. 상품 정렬 기능 (이름순, 가격순)
// 3. 후기 작성 기능 - 상품을 특정하여 이름과 간단한 코멘트를 남길 수 있도록

// - 페이지 추가없이 상품리스트 또는 상품 편집 페이지에서 해당 기능을 추가해주세요.