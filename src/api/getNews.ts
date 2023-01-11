import axios from "axios";
import { ARTICLES_URL } from "../constants/urls";

export const getNews = async () => {
  const { data } = await axios.get(ARTICLES_URL);
  return data;
};
