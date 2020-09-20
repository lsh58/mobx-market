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
      margin: '1rem',
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
      <div className={classes.itemsWrapper}>
        {basket}
        {total}
      </div>
    </div>
  );
};

export default BasketTemplate;
