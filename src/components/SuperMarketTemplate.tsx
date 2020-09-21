import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '70%',
    margin: '3rem auto',
  },
  category:{
    width: '50%',
    margin:'2rem auto',
    display:'flex',
    justifyContent:'space-between',
    '& a':{
      textDecoration:'none',
      color: theme.palette.grey[800],
      fontWeight:'bold'
    }
  }
}));

const SuperMarketTemplate = ({ items }: { items: JSX.Element }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <nav className={classes.category}> 
      {/* 임시카테고리 */}
        <a href="/">Latest Product</a>
        <a href="/">Best Product</a>
        <a href="/">Featured Product</a>
        <a href="/">Special Product</a>
      </nav>
      <Grid container spacing={2}>
        {items}
      </Grid>
    </Box>
  );
};

export default SuperMarketTemplate;
