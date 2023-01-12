import { INewsArticle } from "../../../@types/newsArticleTypes";
import { IState } from "../../../@types/stateTypes";

export interface INewsState extends IState {
  news: INewsArticle[];
  filteredNews: INewsArticle[];
  searchValue: string;
  results: number;
}
