import React from 'react';
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import { Paper, Typography, Grid}  from "@material-ui/core"; // styles 기능 추가

const useStyles = makeStyles((theme:Theme) => ({  // style 요소 선언
  shopItem: {
    background: 'white',
    padding: theme.spacing(2),
    height:'100px',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover':{
      background: '#495057',
      color: 'white',
    },
  },
  textWrapper:{
    display:'flex',
    alignItems:'baseLine',
    justifyContent:'space-around',
    marginTop:'0.5rem',
    '& h6': {
      fontSize:'1.1rem',
      fontWeight:'bold',
    }
  }
}));

const ShopItem = ({ name, price, onPut } : {name:string, price:number, onPut:any}) => {
  const classes = useStyles();
  return (
    <Grid item lg={2} md={3} sm={4} xs={12}>
      <Paper elevation={3} className={classes.shopItem} onClick={() => onPut(name, price)}>
      </Paper>
      <div className={classes.textWrapper} >
        <Typography variant="h6" gutterBottom>
            {name}
        </Typography>
        <Typography variant="body1">{price}won</Typography>
      </div>
    </Grid>
  );
};

export default ShopItem;