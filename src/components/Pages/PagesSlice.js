import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  pages: [],
  status: "idle",
  error: null,
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    pagesAdded: {
      reducer(state, action) {
        state.pages.push(action.payload);
      },
      prepare(title, description, type, userID) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            type,
            userID,
          },
        };
      },
    },
    getPages(state, action) {
      state.pages = action.payload;
    },
  },
});

export const { pagesAdded, getPages } = pagesSlice.actions;

export default pagesSlice.reducer;

export const selectAllPages = (state) => state.pages.pages;
