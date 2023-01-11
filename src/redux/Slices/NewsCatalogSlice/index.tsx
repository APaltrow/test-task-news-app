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
  results: 0,

  status: StateStatusList.IDLE,
  error: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
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

export const { clearNewsCatalog } = newsSlice.actions;

export default newsSlice.reducer;
