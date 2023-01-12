import axios from "axios";
import { INewsArticle } from "../@types/newsArticleTypes";

import { ARTICLES_URL } from "../constants/urls";

export const getNews = async () => {
  const { data } = await axios.get<INewsArticle[]>(ARTICLES_URL);
  return data;
};

export const getSingleNews = async (id: number) => {
  const { data } = await axios.get<INewsArticle>(`${ARTICLES_URL}/${id}`);

  return data;
};
