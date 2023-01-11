import { useAppSelector } from "../../@types/storeHoorksTypes";
import { getNewsState } from "../../redux/Slices/NewsCatalogSlice";
import { NewsCard } from "../NewsCard";

import style from "./NewsCatalog.module.scss";

export const NewsCatalog = () => {
  const { news, results } = useAppSelector(getNewsState);

  return (
    <div className={style.newsCatalog_container}>
      <p className={style.results}>
        <span>{`Results: ${results}`}</span>
      </p>
      <div className={style.newsCatalog_cards}>
        {news.map((newsCard) => (
          <NewsCard key={newsCard.id} newsCard={newsCard} />
        ))}
      </div>
    </div>
  );
};
