import React from "react";
import { useMarketStore } from "../stores/market";
import { useObserver } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core/styles"; 

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...theme.typography.h6,
    width: "100%",
    height: 200,
    margin: theme.spacing(2, "auto"),
    background: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& b": {
      fontWeight: "bold",
    },
  },
}));

const TotalPrice: React.FC = () => {
  const market = useMarketStore();
  const classes = useStyles();
  return useObserver(() => (
    <div className={classes.root}>
      <p>
        총 상품금액 <b>{market.total}</b>원 <b>+</b> 배송비 <b>0</b> 원 <b>-</b>{" "}
        할인금액 <b>0</b> 원 <b>=</b> 총합 <b>{market.total}</b>원
      </p>
    </div>
  ));
};

export default TotalPrice;
