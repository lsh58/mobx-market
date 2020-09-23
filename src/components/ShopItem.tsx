import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import { Typography, Grid, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { ProductItem } from "../models";
import { observer } from "mobx-react";

const useStyles = makeStyles((theme: Theme) => ({
  // style 요소 선언
  shopItem: {
    background: theme.palette.primary.light,
    padding: theme.spacing(2),
    height: 200,
    position: "relative",
  },
  cart: {
    position: "absolute",
    top: 16,
    right: 16,
    color: theme.palette.primary.dark,
    border: "none",
    outlineStyle: "none",
    cursor: "pointer",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 32,
    "& h6": {
      fontSize: 14,
      fontWeight: 500,
      color: theme.palette.primary.dark,
    },
    "& .price": {
      fontWeight: "bold",
    },
  },
}));

interface ShopItemProps {
  item: ProductItem;
  onPut?: (id: number) => void;
  onToggle?: (id: number) => void;
}

const ShopItem: React.FC<ShopItemProps> = observer(
  ({ item, onPut = () => {}, onToggle = () => {} }) => {
    const classes = useStyles();
    return (
      <Grid item lg={3} md={4} sm={4} xs={12}>
        <div className={classes.shopItem}>
          <IconButton
            size="small"
            className={classes.cart}
            onClick={() => {
              onPut(item.id);
              onToggle(item.id);
            }}
          >
            {item.isInCart === false ? (
              <ShoppingCartIcon color="primary"></ShoppingCartIcon>
            ) : (
              <RemoveShoppingCartIcon color="secondary"></RemoveShoppingCartIcon>
            )}
          </IconButton>
        </div>
        <div className={classes.textWrapper}>
          <div>
            <Typography variant='h6'>{item.name}</Typography>
          </div>
          <Typography className='price' variant='body1'>
            {item.price} won
          </Typography>
        </div>
      </Grid>
    );
  }
);

export default ShopItem;
