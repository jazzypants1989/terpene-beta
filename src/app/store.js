import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from "../components/Pages/PagesSlice";
import usersReducer from "../components/Users/usersSlice";

export const store = configureStore({
  reducer: {
    pages: pagesReducer,
    users: usersReducer,
  },
});
