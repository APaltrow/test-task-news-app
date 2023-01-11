import { FC } from "react";

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
  return (
    <article className={style[`article_${type}`]}>
      <h2 className={style[`article_${type}_title`]}>{title}</h2>
      <p className={style[`article_${type}_description`]}>{description}</p>
    </article>
  );
};
