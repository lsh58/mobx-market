import React from 'react';
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import { Paper, Typography, Grid }  from "@material-ui/core"; // styles 기능 추가
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

const useStyles = makeStyles((theme:Theme) => ({  // style 요소 선언
  shopItem: {
    background: '#eee',
    padding: theme.spacing(2),
    height:'200px',
    borderRadius: '5px',
    position:'relative',

  },
  cart:{
    position:'absolute',
    top:'1rem',
    right:'1rem',
    color: '#333',
    border:'none',
    outline:'none',
    cursor: 'pointer',
  },
  textWrapper:{
    display:'flex',
    flexDirection:'column',
    marginTop:'1rem',
    marginBottom:'2rem',
    '& h6': {
      fontSize:'1.1rem',
      fontWeight:'bold', 
    }
  },
}));

const ShopItem = ({ name, price,isInCart, onPut, onToggle } : {name:string, price:number, isInCart:boolean, onPut:((name:string, price:number)=>{}), onToggle:(()=>{}) }) => {
  const classes = useStyles();
  return (
    <Grid item lg={3} md={4} sm={4} xs={12}>
      <Paper elevation={3} className={classes.shopItem}>
        <button className={classes.cart} onClick={() => {
          onPut(name, price);
          onToggle();
          }}>
          {!isInCart ?
          <ShoppingCartIcon></ShoppingCartIcon>:
          <RemoveShoppingCartIcon></RemoveShoppingCartIcon>
          }
        </button>
      </Paper>
      <div className={classes.textWrapper} >
        <Typography variant="h6">
            {name}
        </Typography>
        <Typography variant="body1">{price}won</Typography>
      </div>
    </Grid>
  );
};

export default ShopItem;