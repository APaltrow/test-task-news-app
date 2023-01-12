import { FC } from "react";
import { useAppSelector } from "../../@types/storeHoorksTypes";

import { getNewsState } from "../../redux/Slices/NewsCatalogSlice";
import { TextHighlighter } from "../TextHighliter/TextHighlighter";

import style from "./Article.module.scss";

export enum ArticleTypes {
  BIG = "big",
  SMALL = "small",
}
interface IArticle {
  type: ArticleTypes;
  title: string;
  description: string;
}

export const Article: FC<IArticle> = ({ type, title, description }) => {
  const { searchValue } = useAppSelector(getNewsState);

  return (
    <article className={style[`article_${type}`]}>
      <h2 className={style[`article_${type}_title`]}>
        {searchValue ? (
          <TextHighlighter textToSearch={searchValue} text={title} />
        ) : (
          title
        )}
      </h2>
      <p className={style[`article_${type}_description`]}>
        {searchValue ? (
          <TextHighlighter textToSearch={searchValue} text={description} />
        ) : (
          description
        )}
      </p>
    </article>
  );
};
