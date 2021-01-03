import React from "react";
import SuperMarket from "./components/SuperMarket";
import Basket from "./components/Basket";
import Edit from "./components/EditItemList";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  // style 요소 선언
  paperRoot: {
    width: "100%",
    padding: theme.spacing(1.1),
    position: "fixed",
    top: 0,
    zIndex: theme.zIndex.appBar,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  topMenu: {
    width: "53.8%",
    display: "flex",
    justifyContent: "space-between",
  },
  bnrDelivery: {
    borderRadius: 50,
  },
  deliveryImg: {
    width: "163px",
  },
  userMenu: {},
  logoImg: {
    width: "103px",
  },
  gnb: {
    width: "53.8%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    "& nav": {
      width: "40%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      "& a": {
        textDecoration: "none",
        color: theme.palette.grey[800],
        fontWeight: "bold",
      },
    },
  },
  cart: {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: 16,
  },
}));

const MainPage: React.FC = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Paper elevation={0} className={classes.paperRoot}>
        <div className={classes.topMenu}>
          <NavLink to="/" exact>
            <img
              src={require("./img/mainPage/bnr/delivery.webp")}
              alt="delivery"
              className={classes.deliveryImg}
            />
          </NavLink>
          <div className={classes.userMenu}>
            <NavLink to="/" exact>
              회원가입
            </NavLink>
            <NavLink to="/" exact>
              로그인
            </NavLink>
            <NavLink to="/" exact>
              고객센터
            </NavLink>
          </div>
        </div>
        <NavLink to="/mobx-market-ts" exact>
          <img
            src={require("./img/mainPage/logo/logo_x2.webp")}
            alt="main logo"
            className={classes.logoImg}
          />
        </NavLink>
        <nav className={classes.gnb}>
          <nav>
            <a href="/">SHOP</a>
            <a href="/">BLOG</a>
            <a href="/">MEDIA</a>
            <a href="/">COMPANY</a>
          </nav>
          <NavLink to="/Cart" className={classes.cart}>
            CART
          </NavLink>
        </nav>
      </Paper>
      <Switch>
        <Route path="/" component={SuperMarket} exact />
        <Route path="/mobx-market-ts" component={SuperMarket} />
        <Route path="/Cart" component={Basket} />
        <Route path="/Edit" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainPage;
