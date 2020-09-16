import React from 'react';
import '../css/BasketTemplate.css';

const BasketTemplate = ({ basket, total }) => {
  return (
    <div className="BasketTemplate">
      <div className="basket-wrapper">
        <h2>장바구니</h2>
        {basket}
        {total}
      </div>
    </div>
  );
};

export default BasketTemplate;