import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "@/src/app/store/rootReducer";

export const store = configureStore({
  devTools: true,
  reducer: reducers
});
export type TypeRootState = ReturnType<typeof store.getState>;
