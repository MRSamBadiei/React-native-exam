import { configureStore } from "@reduxjs/toolkit";
import userData from "./user/userData";

const store = configureStore({
  reducer: {
    userData: userData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
