import React from "react";
import { useMarketStore } from "../stores/market";
import { ProductItem } from "../models";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { NavLink } from "react-router-dom";
import EditItem from "./EditItem";
import { observer } from "mobx-react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "70%",
    margin: theme.spacing(3, "auto"),
    marginTop: 143,
  },
  indexTab: {
    ...theme.typography.h6,
    border: "none",
    background: theme.palette.primary.dark,
    color: "white",
  },
  editList: {
    "& li": {
      listStyle: "none",
      display: "flex",
      height: 50,
      border: "2px solid #eee",
      alignItems: "center",
      borderBottom: "none",
      fontWeight: "bold",
      "&:nth-child(n+2):hover": {
        background: theme.palette.primary.light,
      },
      "&:last-of-type": {
        borderBottom: "2px solid #eee",
      },
      "& span": {
        flex: 3,
        textAlign: "center",
      },
    },
  },
  btnSpace: {
    flex: 1,
    textAlign: "center",
    "& button": {
      fontWeight: "bold",
    },
  },
  homeBtn: {
    textDecoration: "none",
    "& button": {
      margin: theme.spacing(3, 0),
      fontWeight: "bold",
    },
  },
}));

const EditItemList: React.FC = observer(() => {
  const classes = useStyles();
  const market = useMarketStore();

  return (
    <div className={classes.root}>
      <NavLink to='/' className={classes.homeBtn}>
        <Button variant='contained' size='small' startIcon={<EditIcon />}>
          HOME
        </Button>
      </NavLink>
      <ul className={classes.editList}>
        <li className={classes.indexTab}>
          <span>상품정보</span>
          <span>가격</span>
          <div className={classes.btnSpace}></div>
        </li>
        {market.items.map((item: ProductItem) => (
          <EditItem item={item} key={item.id} onEdit={market.edit} />
        ))}
      </ul>
    </div>
  );
});

export default EditItemList;
