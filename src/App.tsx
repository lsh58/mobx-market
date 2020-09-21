import React from 'react';
import SuperMarket from './components/SuperMarket';
import Basket from './components/Basket';
import Edit from './components/EditItemList';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles'; // styles 기능 추가
import { Paper } from '@material-ui/core'; // styles 기능 추가

const useStyles = makeStyles((theme: Theme) => ({
  // style 요소 선언
  root: {
    width: '100%',
    padding: theme.spacing(4, 0),
    position:'fixed',
    top:0,
    zIndex:1000  
  },
  rootNav: {
    width: '60%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    '& nav':{ 
      width:'40%',
      margin:'0 auto',
      display:'flex',
      justifyContent:'space-between',
      '& a':{
      textDecoration:'none',
      color: theme.palette.grey[800],
      fontWeight:'bold'
      }
    }
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.palette.grey[900],
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Paper elevation={3} className={classes.root}>
        <nav className={classes.rootNav}>
          <NavLink to="/mobx-market-ts" exact className={classes.link}>
            HOME
          </NavLink>
          <nav>
            <a href="/">SHOP</a>
            <a href="/">BLOG</a>
            <a href="/">MEDIA</a>
            <a href="/">COMPANY</a>
          </nav>
          <NavLink to="/Cart" className={classes.link}>
            CART
          </NavLink>
        </nav>
      </Paper>
      <Switch>
        <Route path="/" component={SuperMarket} exact />
        <Route path="/mobx-market-ts" component={SuperMarket} exact />
        <Route path="/Cart" component={Basket} exact />
        <Route path="/Edit" component={Edit} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
