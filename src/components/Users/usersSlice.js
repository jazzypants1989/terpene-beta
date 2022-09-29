import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "http://localhost:2121/users";

const initialState = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;

export const selectAllUsers = (state) => state.users;
