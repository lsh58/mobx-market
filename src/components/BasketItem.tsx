import React from "react";
import { observer } from "mobx-react";
import { ProductItem, BasketProductItem } from "../models";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { useMarketStore } from "../stores/market";

const useStyles = makeStyles((theme: Theme) => ({
  // style 요소 선언
  root: {
    listStyle: "none",
    display: "flex",
    width: "100%",
    margin: "1rem auto",
    textAlign: "center",
    height: 80,
    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
    "& .name": {
      paddingLeft: 10,
      justifyContent: "flex-start",
      flex: 2,
      fontWeight: "bold",
      "& span": {
        width: 90,
        height: 60,
        background: theme.palette.grey[300],
        marginRight: 30,
      },
    },
    "& .count": {
      "& button": {
        background: "none",
        border: "none",
        outlineStyle: "none",
        cursor: "pointer",
        margin: theme.spacing(0, 1),
        color: theme.palette.grey[500],
      },
    },
    "& .select": {
      flexDirection: "column",
      justifyContent: "space-between",
      "& button": {
        width: "60%",
        margin: "0 auto",
        background: "none",
        border: `2px solid ${theme.palette.grey[800]}`,
        cursor: "pointer",
        "&:hover": {
          background: theme.palette.grey[300],
        },
      },
    },
  },
}));

interface BasketItemProps {
  item: ProductItem;
  onTake?: (product: ProductItem) => void;
  onIncrease?: (product: ProductItem) => void;
  onDecrease?: (product: ProductItem) => void;
  onToggle?: (id: number) => void;
}

const BasketItem: React.FC<BasketItemProps> = observer(
  ({
    item,
    onTake = () => {},
    onIncrease = () => {},
    onDecrease = () => {},
    onToggle = () => {},
  }) => {
    const classes = useStyles();
    const market = useMarketStore();
    const selectedItem = market.selectedItems.find(
      (selectItem: BasketProductItem) => selectItem.id === item.id
    )
    const count = selectedItem ? selectedItem.count : 0 ;
    const sum = count * item.price;
    return (
      <li className={classes.root}>
        <div className='name'>
          <span></span>
          {item.name}
        </div>
        <div className='price'>{item.price}원</div>
        <div className='count'>
          <button onClick={() => onIncrease(item)}>
            <AddBoxIcon></AddBoxIcon>
          </button>
          {count}
          <button onClick={() => onDecrease(item)}>
            <IndeterminateCheckBoxIcon></IndeterminateCheckBoxIcon>
          </button>
        </div>
        <div className='totalPrice'>총 {sum} 원</div>
        <div className='shipment'>
          {/* 임시카테고리 */}
          배송비:무료
        </div>
        <div className='select'>
          <button>
            {/* 임시버튼 */}
            상품정보
          </button>
          <button>
            {/* 임시버튼 */}
            관심상품 등록
          </button>
          <button
            onClick={() => {
              onTake(item);
              onToggle(item.id);
            }}
          >
            제거하기
          </button>
        </div>
      </li>
    );
  }
);

export default BasketItem;
