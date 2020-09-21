import React from 'react';
import { useMarketStore } from '../stores/market';
import { useObserver } from 'mobx-react'
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가

const useStyles = makeStyles((theme:Theme) => ({  // style 요소 선언
  root: {
    width: '100%',
    height: 200,
    margin:'2rem auto',
    background: theme.palette.grey[100],
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }
}));

const TotalPrice: React.FC =() => {
  const market  = useMarketStore();
  const classes = useStyles();
  return useObserver(()=>(
      <div className={classes.root}>
        <p>
          총 상품금액 {market.total}원 + 배송비 0 원 - 할인금액 0 원  =  총합 {market.total}원
        </p>
      </div>
    ));
}

export default TotalPrice;