import React from 'react';
import { makeStyles } from "@material-ui/core/styles"; // styles 기능 추가
import Paper  from "@material-ui/core/Paper"; // styles 기능 추가

const useStyles = makeStyles(theme => ({  // style 요소 선언
  ShopItem: {
    background: 'white',
    padding: '0.5rem',
    borderRadius: '2px',
    cursor: 'pointer',
    width: '155px',
    marginLeft:'1%',
    marginBottom: '1%',
    '&:hover':{
      background: '#495057',
      color: 'white',
    }
  }
}));

const ShopItem = ({ name, price, onPut } : {name:string, price:number, onPut:any}) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.ShopItem} onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원</div>
    </Paper>
  );
};

export default ShopItem;