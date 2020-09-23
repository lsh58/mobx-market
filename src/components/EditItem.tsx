import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import { ProductItem } from "../models";
import { observer } from "mobx-react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  inputWrapper: {
    flex: 3,
    display: "flex",
    justifyContent: "center",
    "& input": {
      border:'none',
      borderBottom:'1px solid #333',
      textAlign:'center',
      background:'none',
      outlineStyle: "none",
      width: "30%",
      height: 25,
    },
  },
  btnWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    "& button:nth-of-type(1)": {
      marginRight: "0.5rem",
    },
    "& button:nth-of-type(2)": {
      marginLeft: "0.5rem",
    },//값이 추가될경우를 고려
  },

  editBtn: {
    background: theme.palette.primary.main,
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 30,
    padding: theme.spacing(0, 1),
  },
  cancelBtn: {
    background: theme.palette.secondary.light,
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 30,
    padding: theme.spacing(0, 1),
  },
}));

interface ShopItemProps {
  item: ProductItem;
  onEdit?: (product: ProductItem, name: string, price: number) => void;
}

const EditItem: React.FC<ShopItemProps> = observer(
  ({ item, onEdit = () => {} }) => {
    const classes = useStyles();
    const [isChange, setIsChange] = useState(false);
    const [name, setName] = useState("");
    const [priceTxt, setPrice] = useState("");
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
      setName(e.target.value);
    const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) =>
      setPrice(e.target.value);
    const editMode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      setIsChange(true);
      setName(item.name);
      setPrice(`${item.price}`);
    };
    const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      const price = parseInt(priceTxt);
      onEdit(item, name, price);
      setIsChange(false);
      setName("");
      setPrice("");
    };
    const onCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      setIsChange(false);
      setName("");
      setPrice("");
    }

    return (
      <>
        {isChange === false ? (
          <li>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <div className={classes.btnWrapper}>
              <Button
                size='small'
                onClick={editMode}
                className={classes.editBtn}
              >
                EDIT
              </Button>
            </div>
          </li>
        ) : (
          <li className={classes.root}>
            <div className={classes.inputWrapper}>
              <input
                type='text'
                autoFocus
                value={name}
                onChange={onChangeName}
              ></input>
            </div>
            <div className={classes.inputWrapper}>
              <input
                type='number'
                step='10'
                value={priceTxt}
                onChange={onChangePrice}
              ></input>
            </div>
            <div className={classes.btnWrapper}>
              <Button
                size='small'
                onClick={onSubmit}
                className={classes.editBtn}
              >
                변경
              </Button>
              <Button
                size='small'
                onClick={onCancel}
                className={classes.cancelBtn}
              >
                취소
              </Button>
            </div>
          </li>
        )}
      </>
    );
  }
);

export default EditItem;
