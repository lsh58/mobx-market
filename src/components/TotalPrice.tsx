import React from 'react';
import { useMarketStore } from '../stores/market';
import { useObserver } from 'mobx-react'
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가

const useStyles = makeStyles((theme:Theme) => ({  // style 요소 선언
  root: {
    width: '70%',
    margin:'2rem auto',
    '& p':{
      textAlign:'right'
    }
  }
}));

const TotalPrice: React.FC =() => {
  const market  = useMarketStore();
  const classes = useStyles();
  return useObserver(()=>(
      <div className={classes.root}>
        <p>
          <b>총합: </b> {market.total}원
        </p>
      </div>
    ));
}

export default TotalPrice;