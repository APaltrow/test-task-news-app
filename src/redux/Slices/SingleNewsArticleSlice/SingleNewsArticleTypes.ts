import { INewsArticle } from "../../../@types/newsArticleTypes";
import { IState } from "../../../@types/stateTypes";

export interface ISingleNewsArticleState extends IState {
  singleArticle: INewsArticle | null;
}
