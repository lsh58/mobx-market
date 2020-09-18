import React from 'react';
import SuperMarket from './components/SuperMarket';
import Basket from './components/Basket';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import Button  from "@material-ui/core/Button"; // styles 기능 추가

const useStyles = makeStyles((theme:Theme) => ({  // style 요소 선언
  root: {
    width:'70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem',
  },
  rootNav: {    
    display: 'flex',
    justifyContent: 'space-between',
    padding:'1rem',
  },
  link:{
    textDecoration: 'none',
  },
  btn:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    fontWeight:'bold',
    fontSize:'0.9rem',
    height: 48,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
}));

const App : React.FC = () => {
  const classes = useStyles()
  return (
      <BrowserRouter>
        <div className={classes.root}>
          <nav className={classes.rootNav}>
            <NavLink to="/mobx-market-ts" exact className={classes.link}>
              <Button className={classes.btn}>
                HOME
              </Button>
            </NavLink>
            <NavLink to="/Cart" className={classes.link}>
              <Button className={classes.btn}>
                CART
              </Button>
            </NavLink>
          </nav>
        </div>
        <Switch>
          <Route path="/" component={SuperMarket} exact />
          <Route path="/mobx-market-ts" component={SuperMarket} exact />
          <Route path="/Cart" component={Basket} exact />
        </Switch>
      </BrowserRouter>
  );
}

export default App;