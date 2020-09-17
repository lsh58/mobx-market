import React from 'react';
import { observer, inject } from 'mobx-react';

const TotalPrice: React.FC<{total:any}> =({total}) => {
    return (
      <div>
        <hr />
        <p>
          <b>총합: </b> {total}원
        </p>
      </div>
    );
}

export default inject(({ market }) => ({
  total: market.total
}))(observer(TotalPrice));