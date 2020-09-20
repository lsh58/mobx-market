import React from 'react';
import { observer } from 'mobx-react';
import { CartProductItem, ProductItem } from '../models';
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const useStyles = makeStyles((theme:Theme) => ({  // style 요소 선언
  root: {
    display: 'flex',
    width: '100%',
    margin:'1rem auto',
    textAlign:'center',
    height:'5rem',
    '& .name': {
      paddingLeft:'3rem',
      flex: '2',
      display:'flex',
      alignItems:'center',
      '& div':{
        width:'8rem',
        height:'4rem',
        background:'#eee',
        marginRight:'30px'
      }
    },
    '& .price': {
      flex: '1',
      display:'flex',
      alignItems:'center',
      justifyContent: 'center',
    },
    '& .count': {
      flex: '1',
      display: 'flex',
      alignItems:'center',
      justifyContent: 'center',
      '& svg':{
        margin:'0 1rem',
        cursor:'pointer',
        color:'#aaa'
      }
    },
    '& .totalPrice': {
      flex:'1',
      display:'flex',
      alignItems:'center',
      justifyContent: 'center',
    },
    '& .shipment':{
      flex:'1',
      display:'flex',
      alignItems:'center',
      justifyContent: 'center',
    },
    '& .return': {
      flex:'1',
      marginLeft: 'auto',
      color: '#f06595',
      cursor: 'pointer',
      display:'flex',
      alignItems:'center',
      justifyContent: 'center',
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
      <div className="name">
        <div></div>{item.name}</div>
      <div className="price">{item.price}원</div>
      <div className="count">
        <AddBoxIcon onClick={() => onIncrease(item)}></AddBoxIcon>
          {item.count}
        <IndeterminateCheckBoxIcon onClick={() => onDecrease(item)}></IndeterminateCheckBoxIcon>
      </div>
      <div className="totalPrice">총 {sum} 원</div>
      <div className="shipment">배송비:무료</div>
      <div className="return" onClick={() => onTake(item)}>
        제거
      </div>
    </div>
  );
});

 export default BasketItem;