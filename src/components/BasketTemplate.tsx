import React from 'react';
import { makeStyles } from "@material-ui/core/styles"; // styles 기능 추가

const useStyles = makeStyles(theme => ({  // style 요소 선언
  root: {
    width:'70%',
    display: 'flex',
    border: '1px solid black',
    margin:'1rem auto',
    height:'600px',
  },
  itemsWrapper: {
    width:'100%',
    background: '#f8f9fa',
    margin:'0 auto',
  },  
}));

const BasketTemplate = ({ basket, total } : any) => {
  const classes = useStyles();
    return (
    <div className={classes.root}>
      <div className={classes.itemsWrapper}>
        <h2>장바구니</h2>
        {basket}
        {total}
      </div>
    </div>
  );
};

export default BasketTemplate;