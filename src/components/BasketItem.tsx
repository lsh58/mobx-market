import React from 'react';
import { observer } from 'mobx-react';
import { CartProductItem, ProductItem } from '../models';
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가

const useStyles = makeStyles((theme:Theme) => ({  // style 요소 선언
  root: {
    display: 'flex',
    width: '70%',
    margin:'1rem auto',
    '& .name': {
      flex: '2',
    },
    '& .price': {
      flex: '1',
    },
    '& .count': {
      flex: '1',
      display: 'flex',
      '& .calc': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 1rem',
        width: '1rem',
        height: '1rem',
        border:'1px solid #000',
        borderRadius: '3px',
        cursor: 'pointer',
      }
    },
    '& .totalPrice': {
      flex:'1',
    },
    '& .return': {
      marginLeft: 'auto',
      color: '#f06595',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }
}));

interface BasketItemProps {
  item: CartProductItem;
  onTake?: (product: ProductItem) => void;
  onIncrease?: (product: ProductItem) => void;
  onDecrease?: (product: ProductItem) => void;
}

const BasketItem: React.FC<BasketItemProps> = observer(({ item, onTake = (() => { }), onIncrease = (() => { }), onDecrease = (() => { }) }) => {
  const classes = useStyles();
  const sum = item.count * item.price;
  return (
    <div className={classes.root}>
      <div className="name">{item.name}</div>
      <div className="price">{item.price}원</div>
      <div className="count">
        <div className="calc" onClick={() => onIncrease(item)}>+</div>
          {item.count}
        <div className="calc" onClick={() => onDecrease(item)}>-</div>
      </div>
      <div className="totalPrice">총 {sum} 원</div>
      <div className="return" onClick={() => onTake(item)}>
        제거
      </div>
    </div>
  );
});

 export default BasketItem;