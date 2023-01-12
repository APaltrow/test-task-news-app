import { FC } from "react";

import { useAppSelector } from "../../@types/storeHoorksTypes";
import { getNewsState } from "../../redux/Slices/NewsCatalogSlice";
import { NewsCard } from "../NewsCard";

import { StateStatusList } from "../../@types/stateTypes";

import { Alert } from "@mui/material";
import { Loader } from "../Loader";

import style from "./NewsCatalog.module.scss";

export const NewsCatalog: FC = () => {
  const { news, filteredNews, results, status, error } =
    useAppSelector(getNewsState);

  if (status === StateStatusList.PENDING) {
    return <Loader />;
  }
  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }
  if (!results) {
    return <Alert severity="warning">{"Nothing has been found ..."}</Alert>;
  }

  return (
    <div className={style.newsCatalog_container}>
      <p className={style.results}>
        <span>{`Results: ${results}`}</span>
      </p>
      <div className={style.newsCatalog_cards}>
        {filteredNews.length
          ? filteredNews.map((newsCard) => (
              <NewsCard key={newsCard.id} newsCard={newsCard} />
            ))
          : news.map((newsCard) => (
              <NewsCard key={newsCard.id} newsCard={newsCard} />
            ))}
      </div>
    </div>
  );
};
