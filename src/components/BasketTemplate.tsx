import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles'; // styles 기능 추가

const useStyles = makeStyles((theme: Theme) => ({
  // style 요소 선언
  root: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    margin: '3rem auto',
    '& h2': {
      margin: '1rem 0',
    },
  },
  nameTag:{
    display: 'flex',
    width: '100%',
    margin:'1rem auto',
    paddingBottom:'1rem',
    borderBottom:'2px solid #ddd',
    fontSize:'1rem',
    fontWeight:'bold',
    color: '#999',
    '& span':{
      flex:'1',
      textAlign:'center',
      '&:nth-of-type(1)':{
        flex:'2',
        paddingLeft:'3rem',
        textAlign:'left',
      }
    },
  },
  itemsWrapper: {
    width: '100%',
    margin: '0 auto',
  },
}));

const BasketTemplate = ({
  basket,
  total,
}: {
  basket: React.ReactNode;
  total: React.ReactNode;
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>CART</h2>
      <div className={classes.nameTag}>
        <span>상품정보</span>
        <span>판매금액</span>
        <span>수량</span>
        <span>합계금액</span>
        <span>배송정보</span>
        <span>선택</span>
      </div>
      <div className={classes.itemsWrapper}>
        {basket}
        {total}
      </div>
    </div>
  );
};

export default BasketTemplate;
