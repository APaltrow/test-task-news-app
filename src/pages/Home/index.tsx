import { useEffect, FC } from "react";

import { useAppDispatch, useAppSelector } from "../../@types/storeHoorksTypes";
import { fetchNews, getNewsState } from "../../redux/Slices/NewsCatalogSlice";

import { Search } from "../../components/Search";
import { NewsCatalog } from "../../components/NewsCatalog";

import style from "./Home.module.scss";

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { results } = useAppSelector(getNewsState);

  useEffect(() => {
    if (!results) {
      dispatch(fetchNews());
    }
  }, []);

  return (
    <div className={style.homePage_wrapper}>
      <Search />
      <NewsCatalog />
    </div>
  );
};
