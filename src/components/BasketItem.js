import React from 'react';
import '../css/BasketItem.css';
import { observer } from 'mobx-react';

const BasketItem = observer(({ item, onTake, onIncrease, onDecrease }) => {
  const sum = item.count * item.price;
  return (
    <div className="BasketItem">
      <div className="name">{item.name}</div>
      <div className="price">{item.price}원</div>
      <div className="count">
        <div className="calc" onClick={() => onIncrease(item)}>+</div>
          {item.count}
        <div className="calc" onClick={() => onDecrease(item)}>-</div>
      </div>
      <div className="totalprice">총 {sum} 원</div>
      <div className="return" onClick={() => onTake(item.name)}>
        제거
      </div>
    </div>
  );
});

export default BasketItem;