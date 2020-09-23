import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가

const useStyles = makeStyles((theme: Theme) => ({
  // style 요소 선언
  root: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(15, "auto", 3, "auto"),
    "& h2": {
      margin: theme.spacing(3, 0),
    },
  },
  indexTab: {
    width: "100%",
    display: "flex",
    margin: "1rem auto",
    paddingBottom: 16,
    borderBottom: `2px solid ${theme.palette.primary.light}`,
    fontSize: 15,
    fontWeight: "bold",
    color: theme.palette.primary.dark,
    "& span": {
      flex: 1,
      textAlign: "center",
      "&:nth-of-type(1)": {
        flex: 2,
        paddingLeft: 50,
        textAlign: "left",
      },
    },
  },
  itemsWrapper: {
    width: "100%",
    margin: "0 auto",
  },
}));

const BasketTemplate = ({
  basket,
  total,
}: {
  basket: React.ReactNode;
  total: React.ReactNode;
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>CART</h2>
      <div className={classes.indexTab}>
        <span>상품정보</span>
        <span>판매금액</span>
        <span>수량</span>
        <span>합계금액</span>
        <span>배송정보</span>
        <span>선택</span>
      </div>
      <div className={classes.itemsWrapper}>
        {basket}
        {total}
      </div>
    </div>
  );
};

export default BasketTemplate;
