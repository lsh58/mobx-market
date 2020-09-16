import React from 'react';
import SuperMarket from './components/SuperMarket';
import Basket from './components/Basket';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import './css/Index.css';

const App : React.FC = () => {
  return (
      <BrowserRouter>
        <div className="wrapper">
          <nav>
            <NavLink to="/mobx-market-ts" exact activeClassName="selected">
              HOME
            </NavLink>
            <NavLink to="/Cart" activeClassName="selected">
              CART
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