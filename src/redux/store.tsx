import { configureStore } from "@reduxjs/toolkit";
import NewsCatalogSlice from "./Slices/NewsCatalogSlice";

export const store = configureStore({
  reducer: {
    newsSlice: NewsCatalogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
