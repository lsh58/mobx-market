import React, {useState} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles'; // styles 기능 추가
import { CartProductItem, ProductItem } from '../models';
import { observer } from 'mobx-react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display:'flex',
    justifyContent:'center',
    background:theme.palette.grey[200],
    '& input':{
      width:'20%',
      margin:'0 8rem',
    }
  }
}));

interface ShopItemProps {
  item: CartProductItem;
  onEdit?: (product: ProductItem, name:string, price:number) => void;
} 

const EditItem: React.FC<ShopItemProps> = observer(({ item, onEdit = (() => { }) }) => {
  const classes = useStyles();
  const [isChange, setIsChange] = useState(false);
  const [name, setName] = useState('');
  const [priceTxt, setPrice] = useState('');
  const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value); 
  const onChangePrice = (e:React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value); 
  const editMode = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsChange(true);
    setName(item.name);
    setPrice(`${item.price}`);
  };
  const onSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const price = parseInt(priceTxt);
    onEdit(item,name,price);
    setIsChange(false);
    setName('');
    setPrice('');
  };

  return (
    <>
      {isChange === false ? (
        <li>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <div>
            <button onClick={editMode}>edit</button>
          </div>
        </li>
      ) : (
        <li className={classes.root}>
          <input type="text" autoFocus value={name} onChange={onChangeName}></input>
          <input type="number" value={priceTxt} onChange={onChangePrice}></input>
          <button type="submit" onClick={onSubmit}>변경완료</button>
        </li>
      )}
  </>
  );
});

export default EditItem;
