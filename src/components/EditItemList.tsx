import React from 'react';
import { useMarketStore } from '../stores/market';
import { CartProductItem } from '../models';
import { makeStyles, Theme } from '@material-ui/core/styles'; // styles 기능 추가
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { NavLink } from 'react-router-dom';
import EditItem from './EditItem';
import { observer } from 'mobx-react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '70%',
    margin:theme.spacing(3,'auto'),
    marginTop: 170,
    '& ul li':{
      listStyle:'none',
      display:'flex',
      padding:theme.spacing(1.5,0),
      border:'1px solid #eee',
      borderBottom:'none',
      fontWeight:'bold',
      '&:first-of-type':{
        background:theme.palette.grey[300],
      },
      '&:nth-child(n+2):hover':{
        background:theme.palette.grey[200],
      },
      '&:last-of-type':{
        borderBottom:'1px solid #eee',
      },
      '& span':{
        flex:2,
        textAlign:'center',
      },
      '& div':{
        flex:1,
        textAlign:'center',
        '& button':{
          fontWeight:'bold',
          background:theme.palette.grey[300],
        }
      }
    }
  },
  homeBtn:{
    textDecoration:'none',
    '& button':{
      margin:theme.spacing(3, 0),
      fontWeight:'bold'
    }
  }
}));

const EditItemList: React.FC = observer(() => {
  const classes = useStyles();
  const market = useMarketStore();

  return (
    <div className={classes.root}>
      <NavLink to="/" className={classes.homeBtn}>
        <Button
          variant="contained"
          size="small"
          startIcon={<EditIcon />}
          >
          HOME
        </Button>
      </NavLink>
      <ul>
        <li>
          <span>productName</span>
          <span>price</span>
          <div></div>
        </li>
        {market.items.map((item: CartProductItem) => (
          <EditItem item={item} key={item.id} onEdit={market.edit} />
        ))}
      </ul>
    </div>
  );
});

export default EditItemList;
