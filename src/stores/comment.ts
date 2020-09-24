import { observable, action } from "mobx";
import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";
import { ProductComment } from "../models";

export default class CommentStore {
  @observable comments: ProductComment[] = [];

  @observable commentsId = this.comments.length+1;

  @action
  putComment = (productId: number, name: string, comment: string) => {
    this.comments.push({
      id: this.commentsId,
      productId: productId,
      userName: name,
      comment: comment,
    });
    this.commentsId+=1;
  };
}

export const useCommentStore = () => {
  const ctx = useContext(MobXProviderContext);
  return ctx.comment as CommentStore;
};
