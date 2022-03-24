import { configureStore } from "@reduxjs/toolkit";
import gotSlice from "./gotSlice";

export const store = configureStore({
  reducer: {
    got: gotSlice,
    // user: userSlice
  }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>