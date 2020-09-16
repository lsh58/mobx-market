import React from 'react';
import '../css/SuperMarketTemplate.css';

const SuperMarketTemplate = ({ items }: any) => {
  return (
    <div className="SuperMarketTemplate">
      <div className="items-wrapper">
        <h2>상품</h2>
        {items}
      </div>
    </div>
  );
};

export default SuperMarketTemplate;