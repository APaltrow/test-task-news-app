import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INewsArticle } from "../../../@types/newsArticleTypes";
import { StateStatusList } from "../../../@types/stateTypes";
import { getSingleNews } from "../../../api/getNews";
import { RootState } from "../../store";
import { ISingleNewsArticleState } from "./SingleNewsArticleTypes";

export const fetchSingleNews = createAsyncThunk<INewsArticle, number>(
  "news/fetchSingleNews",
  getSingleNews
);

const initialState: ISingleNewsArticleState = {
  singleArticle: null,

  status: StateStatusList.IDLE,
  error: "",
};

export const singleNewsArticleSlice = createSlice({
  name: "singleNewsArticle",
  initialState,
  reducers: {
    clearSingleArticle: (state) => {
      state.singleArticle = null;
      state.status = StateStatusList.IDLE;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleNews.pending, (state) => {
        state.status = StateStatusList.PENDING;
        state.error = "";
        state.singleArticle = null;
      })
      .addCase(fetchSingleNews.fulfilled, (state, action) => {
        state.singleArticle = action.payload;
        state.status = StateStatusList.SUCCESS;
        state.error = "";
      })
      .addCase(fetchSingleNews.rejected, (state, action) => {
        state.singleArticle = null;
        state.status = StateStatusList.ERROR;
        state.error = action.error.message || "Something went wrong...";
      });
  },
});

export const getSingleNewsArticleState = (state: RootState) =>
  state.singleNewsArticleSlice;

export const { clearSingleArticle } = singleNewsArticleSlice.actions;

export default singleNewsArticleSlice.reducer;
