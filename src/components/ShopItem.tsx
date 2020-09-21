import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles'; // styles 기능 추가
import { Typography, Grid } from '@material-ui/core'; // styles 기능 추가
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { CartProductItem, ProductItem } from '../models';
import { observer } from 'mobx-react';

const useStyles = makeStyles((theme: Theme) => ({
  // style 요소 선언
  shopItem: {
    background: '#eee',
    padding: theme.spacing(2),
    height: 200,
    position: 'relative',
  },
  cart: {
    position: 'absolute',
    top: 16,
    right: 16,
    color: theme.palette.grey[600],
    border: 'none',
    outlineStyle:'none',
    cursor: 'pointer',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 8,
    marginBottom: 32,
    '& h6': {
      fontSize: 14,
      fontWeight: 500,
      color: theme.palette.grey[900],
    },
    '& .price': {
      fontWeight: 'bold',
    },
  },
}));

interface ShopItemProps {
  item: CartProductItem;
  onPut?: (name: string, price: number, isInCart: boolean) => void;
  onToggle?: (product: ProductItem) => void;
}

const ShopItem: React.FC<ShopItemProps> = observer(({ item, onPut = (() => { }), onToggle = (() => { }) }) => {
  const classes = useStyles();
  return (
    <Grid item lg={3} md={4} sm={4} xs={12}>
      <div className={classes.shopItem}>
        <button
          className={classes.cart}
          onClick={() => {
            onPut(item.name,item.price,item.isInCart);
            onToggle(item);
          }}
        >
          {item.isInCart === false ? (
            <ShoppingCartIcon></ShoppingCartIcon>
          ) : (
            <RemoveShoppingCartIcon></RemoveShoppingCartIcon>
          )}
        </button>
      </div>
      <div className={classes.textWrapper}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography className="price" variant="body1">
          {item.price} won
        </Typography>
      </div>
    </Grid>
  );
});

export default ShopItem;
