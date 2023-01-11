import { NewsCard } from "../NewsCard";

import style from "./NewsCatalog.module.scss";

export const NewsCatalog = () => {
  return (
    <div className={style.newsCatalog_container}>
      <p className={style.results}>
        <span>Results: 6</span>
      </p>
      <div className={style.newsCatalog_cards}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};
