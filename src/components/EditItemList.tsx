import React from "react";
import { useMarketStore } from "../stores/market";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import { ProductItem } from "../models";
import { Button, Typography, Modal, TextField } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import EditItem from "./EditItem";
import { observer } from "mobx-react";
import EditIcon from "@material-ui/icons/Edit";
import ImportExportIcon from "@material-ui/icons/ImportExport";

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
    justifyContent: "flex-end",
    "& button": {
      color: "white",
    },
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
      cursor:'pointer',
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
  homeBtn: {
    textDecoration: "none",
    "& button": {
      margin: theme.spacing(3, 0),
      fontWeight: "bold",
    },
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
    "& input": {
      fontWeight: "bold",
      marginRight: "1rem",
      height: 50,
      padding: "0 1rem",
    },
    "& button": {
      fontWeight: "bold",
      marginLeft: "5rem",
      color: "white",
    },
  },
}));

const EditItemList: React.FC = observer(() => {
  const classes = useStyles();
  const market = useMarketStore();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <form className={classes.modalWrapper} noValidate autoComplete="off">
      <TextField label="상품명" variant="outlined" className={classes.modalWrapper} />
      <TextField label="가격" variant="outlined" />
      <Button variant='contained' color='primary'>
        상품등록
      </Button>
    </form>
  );
  return (
    <div className={classes.root}>
      <NavLink to='/' className={classes.homeBtn}>
        <Button variant='contained' size='small' startIcon={<EditIcon />}>
          HOME
        </Button>
      </NavLink>
      <div className={classes.btnWrapper}>
        <Button variant='contained' color='primary' onClick={handleOpen}>
          상품추가
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
      <ul className={classes.editList}>
        <li className={classes.indexTab}>
          <div className={classes.btnSpace}></div>
          <span className={classes.index}>
            <Typography variant='h4' component='h4'>
              상품명
            </Typography>
            <button>
              <ImportExportIcon />
            </button>
          </span>
          <span className={classes.index}>
            <Typography variant='h4' component='h4'>
              가격
            </Typography>
            <button>
              <ImportExportIcon />
            </button>
          </span>
          <div className={classes.btnSpace2}></div>
        </li>
        {market.items.map((item: ProductItem) => (
          <EditItem item={item} key={item.id} onEdit={market.edit} />
        ))}
      </ul>
    </div>
  );
});

export default EditItemList;
