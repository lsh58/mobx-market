import React from "react";
import { useMarketStore } from "../stores/market";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import { ProductItem } from "../models";
import { Button, Typography, Modal, TextField } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import EditItem from "./EditItem";
import { observer } from "mobx-react";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { useLocalStore } from "mobx-react"; // 6.x

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
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
  btnWrapper: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-start",
    "& button": {
      color: "white",
    },
  },
  homeBtn: {
    textDecoration: "none",
    "& button": {
      margin: theme.spacing(3, 1, 0, 0),
      fontWeight: "bold",
    },
  },
  addBtn: {
    margin: theme.spacing(3, 0, 0),
    fontWeight: "bold",
  },
  editList: {
    padding: 0,
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
        flex: 5,
        textAlign: "center",
      },
    },
  },
  index: {
    flex: 5,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& button": {
      border: "none",
      outlineStyle: "none",
      background: "none",
      cursor: "pointer",
      "& svg": {
        fill: "white",
      },
    },
  },
  btnSpace: {
    flex: 1,
  },
  btnSpace2: {
    flex: 3,
  },
  modalWrapper: {
    position: "absolute",
    width: 1000,
    height: 150,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%,",
    transform: `translate(50%, -50%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& button": {
      fontWeight: "bold",
      marginLeft: "5rem",
      color: "white",
    },
  },
  nameField: {
    width: "30%",
    fontWeight: "bold",
    marginRight: "1rem",
  },
  priceField: {
    width: "30%",
    fontWeight: "bold",
  },
}));

const EditItemList: React.FC = observer(() => {
  const classes = useStyles();
  const market = useMarketStore();
  const btnWrapper = useLocalStore(() => ({
    open: false,
    name: "",
    priceTxt: "",
    handleOpen() {
      btnWrapper.open = true;
    },
    handleClose() {
      btnWrapper.open = false;
    },
    onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
      btnWrapper.name = e.target.value;
    },
    onChangePrice(e: React.ChangeEvent<HTMLInputElement>) {
      btnWrapper.priceTxt = e.target.value;
    },
    onSubmit() {
      const price = parseInt(btnWrapper.priceTxt);
      market.add(btnWrapper.name, price);
    },
    get topBtn() {
      return (
        <div className={classes.btnWrapper}>
          <NavLink to='/' className={classes.homeBtn}>
            <Button variant='contained' size='small' color='primary'>
              수정완료
            </Button>
          </NavLink>
          <Button
            variant='contained'
            size='small'
            color='primary'
            onClick={btnWrapper.handleOpen}
            className={classes.addBtn}
          >
            상품추가
          </Button>
          <Modal
            open={btnWrapper.open}
            onClose={btnWrapper.handleClose}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
          >
            <form
              className={classes.modalWrapper}
              noValidate
              autoComplete='off'
            >
              <TextField
                label='상품명'
                variant='outlined'
                className={classes.nameField}
                onChange={btnWrapper.onChangeName}
              />
              <TextField
                label='가격'
                type='number'
                variant='outlined'
                className={classes.priceField}
                onChange={btnWrapper.onChangePrice}
              />
              <Button
                variant='contained'
                color='primary'
                onClick={btnWrapper.onSubmit}
              >
                상품등록
              </Button>
            </form>
          </Modal>
        </div>
      );
    },
  }));

  return (
    <div className={classes.root}>
      {btnWrapper.topBtn}
      <ul className={classes.editList}>
        <li className={classes.indexTab}>
          <span className={classes.index}>
            <Typography variant='h4' component='h4'>
              상품명
            </Typography>
            <button>
              <ImportExportIcon onClick={market.nameOrder}/>
            </button>
          </span>
          <span className={classes.index}>
            <Typography variant='h4' component='h4'>
              가격
            </Typography>
            <button>
              <ImportExportIcon onClick={market.priceOrder}/>
            </button>
          </span>
          <div className={classes.btnSpace2}></div>
        </li>
        {market.items.map((item: ProductItem) => (
          <EditItem
            item={item}
            key={item.id}
            onEdit={market.edit}
            onClear={market.clear}
          />
        ))}
      </ul>
    </div>
  );
});

export default EditItemList;
