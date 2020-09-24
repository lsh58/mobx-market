import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"; // styles 기능 추가
import { ProductComment } from "../models";
import { observer } from "mobx-react";
import {
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  // style 요소 선언
  root: {
    background:theme.palette.primary.light,
    borderRadius:'5px',
    padding:theme.spacing(2),
    margin:theme.spacing(1),
    color:theme.palette.primary.dark,
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
  },
  comment:{
    marginLeft:'1rem'
  }
}));

interface CommentProps {
  comment: ProductComment;
}

const Comment: React.FC<CommentProps> = observer(
  ({ comment }) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography variant='h6' component='h6'>{comment.userName}</Typography>
        <Typography variant='h6' component='h6' className={classes.comment}>{comment.comment}</Typography>
      </div>
    );
  }
);

export default Comment;
