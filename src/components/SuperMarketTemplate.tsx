import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "70%",
    margin: theme.spacing(15, "auto", 3, "auto"),
  },
  category: {
    width: "50%",
    margin: theme.spacing(0,'auto'),
    display: "flex",
    justifyContent: "space-between",
    "& a": {
      textDecoration: "none",
      color: theme.palette.primary.dark,
      fontWeight: "bold",
    },
  },
  editBtn: {
    textDecoration: "none",
    "& button": {
      margin: theme.spacing(3, 0),
      fontWeight: "bold",
    },
  },
}));

const SuperMarketTemplate = ({ items }: { items: JSX.Element }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <nav className={classes.category}>
        {/* 임시카테고리 */}
        <a href='/'>Latest Product</a>
        <a href='/'>Best Product</a>
        <a href='/'>Featured Product</a>
        <a href='/'>Special Product</a>
      </nav>
      <NavLink to='/Edit' className={classes.editBtn}>
        <Button variant='contained' size='small' startIcon={<EditIcon />}>
          EDIT
        </Button>
      </NavLink>
      <Grid container spacing={2}>
        {items}
      </Grid>
    </Box>
  );
};

export default SuperMarketTemplate;
