import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import { Typography, Grid, IconButton, Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { ProductItem } from "../models";
import { observer } from "mobx-react";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme: Theme) => ({
  // style 요소 선언
  shopItem: {
    background: theme.palette.primary.light,
    padding: theme.spacing(2),
    height: 200,
    position: "relative",
  },
  cart: {
    position: "absolute",
    top: 16,
    right: 16,
    color: theme.palette.primary.dark,
    border: "none",
    outlineStyle: "none",
    cursor: "pointer",
  },
  infoWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
    "& button": {
      height: 30,
      marginRight: "1rem",
    },
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 8,
    "& h6": {
      fontSize: 14,
      fontWeight: 500,
      color: theme.palette.primary.dark,
    },
    "& .price": {
      fontWeight: "bold",
    },
  },
  modalWrapper: {
    position: "absolute",
    width: 1000,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%,",
    transform: `translate(50%, -50%)`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  modalIndex: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  indexName:{
    flex:1
  },
  indexComment:{
    flex:2
  },
  btnSpace :{
    flex:1
  },
  modalInput: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    "& h4": {
      fontWeight: "bold",
      marginRight: "2rem",
    },
    "& input": {
      outlineStyle: "none",
      background: "none",
      border: "none",
      borderBottom: "1px solid #333",
    },
    "& button": {
      flex: 1,
      fontWeight: "bold",
      marginLeft: "5rem",
      color: "white",
    },
  },
  modalName: {
    flex: 1,
    fontWeight: "bold",
    marginRight: "1rem",
    height: 30,
    padding: "0 1rem",
  },
  modalComment: {
    flex: 2,
    width: "50%",
    fontWeight: "bold",
    marginRight: "1rem",
    height: 30,
    padding: "0 1rem",
  },
  rateBtn: {
    background: theme.palette.primary.light,
  },
}));

interface ShopItemProps {
  item: ProductItem;
  onPut?: (id: number) => void;
  onToggle?: (id: number) => void;
}

const ShopItem: React.FC<ShopItemProps> = observer(
  ({ item, onPut = () => {}, onToggle = () => {} }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    const body = (
      <div className={classes.modalWrapper}>
        <div className={classes.modalIndex}>
          <Typography variant='h4' component='h4' className={classes.indexName}>
            Name
          </Typography>
          <Typography variant='h4' component='h4' className={classes.indexComment}>
            Comment
          </Typography>
          <div className={classes.btnSpace}></div>
        </div>
        <div className={classes.modalInput}>
          <input
            type='text'
            placeholder='Name'
            autoFocus
            className={classes.modalName}
          ></input>
          <input
            type='text'
            placeholder='Comment'
            className={classes.modalComment}
          ></input>
          <Button variant='contained' color='primary'>
            후기등록
          </Button>
        </div>
      </div>
    );

    return (
      <Grid item lg={3} md={4} sm={4} xs={12}>
        <div className={classes.shopItem}>
          <IconButton
            size='small'
            className={classes.cart}
            onClick={() => {
              onPut(item.id);
              onToggle(item.id);
            }}
          >
            {item.isInCart === false ? (
              <ShoppingCartIcon color='primary'></ShoppingCartIcon>
            ) : (
              <RemoveShoppingCartIcon color='secondary'></RemoveShoppingCartIcon>
            )}
          </IconButton>
        </div>
        <div className={classes.infoWrapper}>
          <div className={classes.textWrapper}>
            <Typography variant='h6'>{item.name}</Typography>
            <Typography className='price' variant='body1'>
              {item.price} won
            </Typography>
          </div>
          <Button
            variant='contained'
            onClick={handleOpen}
            className={classes.rateBtn}
          >
            후기보기
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
          >
            {body}
          </Modal>
        </div>
      </Grid>
    );
  }
);

export default ShopItem;
