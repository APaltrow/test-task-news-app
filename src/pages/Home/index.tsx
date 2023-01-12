import { useEffect } from "react";

import { useAppDispatch } from "../../@types/storeHoorksTypes";
import { fetchNews } from "../../redux/Slices/NewsCatalogSlice";

import { Search } from "../../components/Search";
import { NewsCatalog } from "../../components/NewsCatalog";

import style from "./Home.module.scss";

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className={style.homePage_wrapper}>
      <Search />
      <NewsCatalog />
    </div>
  );
};
