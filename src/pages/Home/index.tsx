import { Search } from "../../components/Search";
import { NewsCatalog } from "../../components/NewsCatalog";
import style from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={style.homePage_wrapper}>
      <Search />
      <NewsCatalog />
    </div>
  );
};
