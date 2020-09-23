import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import { ProductItem } from "../models";
import { observer } from "mobx-react";
import Button from "@material-ui/core/Button";
import { useLocalStore } from "mobx-react"; // 6.x

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
      border: "none",
      borderBottom: "1px solid #333",
      textAlign: "center",
      background: "none",
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
    }, //값이 추가될경우를 고려
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

    const edit = useLocalStore(() => ({
      isChange: false,
      name: "",
      priceTxt: "",
      toggle() {
        edit.isChange = !edit.isChange;
      },
      onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        edit.name = e.target.value;
      },
      onChangePrice(e: React.ChangeEvent<HTMLInputElement>) {
        edit.priceTxt = e.target.value;
      },
      editMode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        edit.isChange = true;
        edit.name = item.name;
        edit.priceTxt = `${item.price}`;
      },
      onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        const price = parseInt(edit.priceTxt);
        onEdit(item, edit.name, price);
        edit.isChange = false;
        edit.name = "";
        edit.priceTxt = "";
      },
      onCancel(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        edit.isChange = false;
        edit.name = "";
        edit.priceTxt = "";
      },
      get mode() {
        return !edit.isChange ? (
          <li>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <div className={classes.btnWrapper}>
              <Button
                size='small'
                onClick={edit.editMode}
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
                value={edit.name}
                onChange={edit.onChangeName}
              ></input>
            </div>
            <div className={classes.inputWrapper}>
              <input
                type='number'
                step='10'
                value={edit.priceTxt}
                onChange={edit.onChangePrice}
              ></input>
            </div>
            <div className={classes.btnWrapper}>
              <Button
                size='small'
                onClick={edit.onSubmit}
                className={classes.editBtn}
              >
                변경
              </Button>
              <Button
                size='small'
                onClick={edit.onCancel}
                className={classes.cancelBtn}
              >
                취소
              </Button>
            </div>
          </li>
        );
      },
    }));

    return <>{edit.mode}</>;
  }
);

export default EditItem;
