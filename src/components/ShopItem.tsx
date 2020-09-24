import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import {
  Typography,
  Grid,
  IconButton,
  Button,
  TextField,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { ProductItem, ProductComment } from "../models";
import { observer } from "mobx-react";
import Modal from "@material-ui/core/Modal";
import { useCommentStore } from "../stores/comment";
import { useLocalStore } from "mobx-react"; // 6.x
import Comment from "./Comment";

const useStyles = makeStyles((theme: Theme) => ({
  // style 요소 선언
  shopItem: {
    background: theme.palette.primary.light,
    height: 200,
    position: "relative",
    "&:hover div": {
      display: "block",
    },
  },
  cart: {
    position: "absolute",
    zIndex: 100,
    top: 16,
    right: 16,
    color: theme.palette.primary.dark,
    border: "none",
    outlineStyle: "none",
    cursor: "pointer",
  },
  infoWrapper: {
    marginBottom: 32,
    position: "relative",
    "& button": {
      height: 30,
      marginRight: "1rem",
    },
  },
  hoverWindow: {
    position: "absolute",
    zIndex: 50,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.1)",
    display: "none",
    "& button": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      border: "none",
      outline: "none",
      background: "none",
      "& h4": {
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
      },
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
    top: "50%",
    left: "50%,",
    transform: `translate(50%, -50%)`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  modalInput: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTop: "1px solid #eee",
    padding: theme.spacing(2),
    "& h4": {
      fontWeight: "bold",
      marginRight: "2rem",
    },
    "& button": {
      flex: 1,
      background: theme.palette.primary.main,
      fontWeight: "bold",
      marginLeft: "2rem",
      color: "white",
      height: 50,
    },
  },
  nameField: {
    flex: 2,
    fontWeight: "bold",
    marginRight: "1rem",
    borderRadius: "5px",
  },
  commentField: {
    flex: 10,
    fontWeight: "bold",
    borderRadius: "5px",
  },
  modalContents: {
    padding:theme.spacing(3),
    flex: 10,
    overflow:'auto'
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
    const comment = useCommentStore();
    const btnWrapper = useLocalStore(() => ({
      open: false,
      name: "",
      comment: "",
      itemId: 0,
      handleOpen() {
        btnWrapper.open = true;
        btnWrapper.itemId = item.id;
      },
      handleClose() {
        btnWrapper.open = false;
      },
      onSubmit() {
        comment.putComment(
          btnWrapper.itemId,
          btnWrapper.name,
          btnWrapper.comment
        );
      },
      onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        btnWrapper.name = e.target.value;
      },
      onChangeComment(e: React.ChangeEvent<HTMLInputElement>) {
        btnWrapper.comment = e.target.value;
      },
      get modalBtn() {
        return (
          <>
            <button onClick={btnWrapper.handleOpen}>
              <Typography variant='h4' component='h4'>
                VIEW COMMENTS
              </Typography>
            </button>
            <Modal
              open={btnWrapper.open}
              onClose={btnWrapper.handleClose}
              aria-labelledby='simple-modal-title'
              aria-describedby='simple-modal-description'
            >
              <div className={classes.modalWrapper}>
                <div className={classes.modalContents}>
                  {comment.comments
                    .filter((comment: ProductComment) => {
                      return comment.productId === item.id
                    })
                    .map((comment: ProductComment) => (
                      <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
                <div className={classes.modalInput}>
                  <TextField
                    label='Name'
                    variant='outlined'
                    className={classes.nameField}
                    onChange={btnWrapper.onChangeName}
                  />
                  <TextField
                    label='Comment'
                    variant='outlined'
                    className={classes.commentField}
                    onChange={btnWrapper.onChangeComment}
                  />
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={btnWrapper.onSubmit}
                  >
                    SEND
                  </Button>
                </div>
              </div>
            </Modal>
          </>
        );
      },
    }));

    return (
      <Grid item lg={3} md={4} sm={4} xs={12}>
        <div className={classes.shopItem}>
          <div className={classes.hoverWindow}>{btnWrapper.modalBtn}</div>
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
        </div>
      </Grid>
    );
  }
);

export default ShopItem;
