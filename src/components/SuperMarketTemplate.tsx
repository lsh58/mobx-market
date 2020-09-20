import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '70%',
    margin: '5rem auto',
  },
}));

const SuperMarketTemplate = ({ items }: { items: JSX.Element }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {items}
      </Grid>
    </Box>
  );
};

export default SuperMarketTemplate;
