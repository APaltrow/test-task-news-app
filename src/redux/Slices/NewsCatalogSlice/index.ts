import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { INewsArticle } from "../../../@types/newsArticleTypes";
import { StateStatusList } from "../../../@types/stateTypes";
import { INewsState } from "./NewsCatalogTypes";
import { RootState } from "../../store";

import { getNews } from "../../../api/getNews";

export const fetchNews = createAsyncThunk<INewsArticle[]>(
  "news/fetchNews",
  getNews
);

const initialState: INewsState = {
  news: [],
  filteredNews: [],
  searchValue: "",
  results: 0,

  status: StateStatusList.IDLE,
  error: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      const searchValue = action.payload;
      state.searchValue = searchValue;

      if (searchValue) {
        /* Filtering by title here as first priority*/
        const filterByTitle = state.news.filter((article) =>
          article.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        /* Filtering by description here as second priority */
        const filterByDescription = state.news.filter((article) => {
          const isInArticleDescription = article.summary
            .toLowerCase()
            .includes(action.payload.toLowerCase());

          /* excluding potential dublicates from 'filterByTitle' */
          const isInFilterByTitle = !filterByTitle.find(
            (titleArticle) => titleArticle.id === article.id
          );

          return isInArticleDescription && isInFilterByTitle;
        });

        /* Merging filtered results */
        state.filteredNews = [...filterByTitle, ...filterByDescription];
        state.results = state.filteredNews.length;
      } else {
        state.filteredNews = [];
        state.results = state.news.length;
      }
    },
    clearSearchValue: (state) => {
      state.searchValue = "";
      state.filteredNews = [];
      state.results = state.news.length;
    },
    clearNewsCatalog: (state) => {
      state.news = [];
      state.results = 0;
      state.status = StateStatusList.IDLE;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = StateStatusList.PENDING;
        state.results = 0;
        state.error = "";
        state.news = [];
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = StateStatusList.SUCCESS;
        state.error = "";
        state.news = action.payload;
        state.results = action.payload.length;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.news = [];
        state.results = 0;
        state.status = StateStatusList.ERROR;
        state.error = action.error.message || "Something went wrong...";
      });
  },
});

export const getNewsState = (state: RootState) => state.newsSlice;

export const { setSearchValue, clearNewsCatalog, clearSearchValue } =
  newsSlice.actions;

export default newsSlice.reducer;
