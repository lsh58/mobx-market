import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import { ProductItem } from "../models";
import { observer } from "mobx-react";
import { Button, IconButton } from "@material-ui/core";
import { useLocalStore } from "mobx-react"; // 6.x
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  inputWrapper: {
    flex: 5,
    display: "flex",
    justifyContent: "center",
    "& input": {
      border: "none",
      borderBottom: "1px solid #333",
      textAlign: "center",
      background: "none",
      outlineStyle: "none",
      width: "50%",
      height: 25,
    },
  },
  selectBtnWrapper: {
    flex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& button:nth-of-type(1)": {
      marginRight: "0.5rem",
    },
    "& button:nth-of-type(2)": {
      marginLeft: "0.5rem",
    }, //값이 추가될경우를 고려할것
  },
  editBtn: {
    background: theme.palette.primary.main,
    border: 0,
    color: "white",
    width: 30,
    height: 30,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
    "& svg": {
      fontSize: "1rem",
    },
  },
  clearBtn: {
    background: theme.palette.primary.main,
    border: 0,
    color: "white",
    width: 30,
    height: 30,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
    "& svg": {
      fontSize: "1.2rem",
    },
  },
  cancelBtn: {
    background: theme.palette.secondary.light,
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 30,
    padding: theme.spacing(0, 1),
    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
}));

interface ShopItemProps {
  item: ProductItem;
  onEdit?: (product: ProductItem, name: string, price: number) => void;
  onClear?: (product: ProductItem) => void;
}

const EditItem: React.FC<ShopItemProps> = observer(
  ({ item, onEdit = () => {}, onClear = () => {} }) => {
    const classes = useStyles();
    const edit = useLocalStore(() => ({
      isChange: false,
      name: "",
      priceTxt: "",
    }));
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      edit.name = e.target.value;
    };
    const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
      edit.priceTxt = e.target.value;
    };
    const editMode = () => {
      edit.isChange = true;
      edit.name = item.name;
      edit.priceTxt = `${item.price}`;
    };
    const onSubmit = () => {
      const price = parseInt(edit.priceTxt);
      onEdit(item, edit.name, price);
      edit.isChange = false;
      edit.name = "";
      edit.priceTxt = "";
    };
    const onCancel = () => {
      edit.isChange = false;
      edit.name = "";
      edit.priceTxt = "";
    };
    const clear = () => {
      onClear(item);
    };
    return !edit.isChange ? (
      <li>
        <span>{item.name}</span>
        <span>{item.price}</span>
        <div className={classes.selectBtnWrapper}>
          <IconButton
            size='small'
            onClick={editMode}
            className={classes.editBtn}
          >
            <EditIcon />
          </IconButton>
          <IconButton size='small' onClick={clear} className={classes.clearBtn}>
            <ClearIcon />
          </IconButton>
        </div>
      </li>
    ) : (
      <li className={classes.root}>
        <div className={classes.inputWrapper}>
          <input
            type='text'
            autoFocus
            value={edit.name}
            onChange={onChangeName}
          ></input>
        </div>
        <div className={classes.inputWrapper}>
          <input
            type='number'
            step='10'
            value={edit.priceTxt}
            onChange={onChangePrice}
          ></input>
        </div>
        <div className={classes.selectBtnWrapper}>
          <Button size='small' onClick={onSubmit} className={classes.editBtn}>
            변경
          </Button>
          <Button size='small' onClick={onCancel} className={classes.cancelBtn}>
            취소
          </Button>
        </div>
      </li>
    );
  }
);

export default EditItem;
