import { configureStore } from "@reduxjs/toolkit";

import NewsCatalogSlice from "./Slices/NewsCatalogSlice";
import SingleNewsArticleSlice from "./Slices/SingleNewsArticleSlice";

export const store = configureStore({
  reducer: {
    newsSlice: NewsCatalogSlice,
    singleNewsArticleSlice: SingleNewsArticleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
