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
function useUserData() {
  const ctx = useMarketStore()
  return useObserver(()=>({
    total : ctx.total
  }))
}
const TotalPrice: React.FC =() => {
  const classes = useStyles();
  const { total } = useUserData()
  return (
      <div className={classes.root}>
        <p>
          <b>총합: </b> {total}원
        </p>
      </div>
    );
}

export default TotalPrice;