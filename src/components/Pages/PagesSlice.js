import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PAGES_URL = "http://localhost:2121/pages";

const initialState = {
  pages: [],
  status: "idle",
  error: null,
};

export const fetchPages = createAsyncThunk("pages/fetchPages", async () => {
  const response = await axios.get(PAGES_URL);
  return response.data;
});

export const addNewPage = createAsyncThunk("pages/addNewPage", async (page) => {
  const response = await axios.post(PAGES_URL, page);
  return response.data;
});

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    pagesAdded: {
      reducer(state, action) {
        state.pages.push(action.payload);
      },
      prepare(title, description, type, userID, date) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            type,
            date: new Date().toISOString(),
            userID,
            reactions: {
              upVotes: 0,
              downVotes: 0,
              likes: 0,
              coffee: 0,
              zen: 0,
            },
          },
        };
      },
    },
    getPages(state, action) {
      state.pages = action.payload;
    },
    reactionAdded(state, action) {
      const { pageId, reaction } = action.payload;
      const existingPage = state.pages.find((page) => page.id === pageId);
      if (existingPage) {
        existingPage.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPages.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = state.pages.concat(action.payload);
      })
      .addCase(fetchPages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPage.fulfilled, (state, action) => {
        state.pages.push(action.payload);
        console.log("addNewPage.fulfilled", action.payload);
      })
      .addCase(addNewPage.rejected, (state, action) => {
        console.log("addNewPage.rejected", action.error.message);
      });
  },
});

export const { pagesAdded, getPages, reactionAdded } = pagesSlice.actions;

export default pagesSlice.reducer;

export const selectAllPages = (state) => state.pages.pages;
export const getPageStatus = (state) => state.pages.status;
export const getPageError = (state) => state.pages.error;
