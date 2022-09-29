import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      username: "admin",
      email: "jessepence@gmail.com",
      password: "J3llyb3@ns!",
    },
    {
      id: 2,
      username: "littlejesse",
      email: "littlejesse@gmail.com",
      password: "J3llyb3@n$",
    },
  ],
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersAdded: {
      reducer(state, action) {
        state.users.push(action.payload);
      },
      prepare(username, email, password) {
        return {
          payload: {
            username,
            email,
            password,
          },
        };
      },
    },
    getUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { usersAdded, getUsers } = usersSlice.actions;

export const selectAllUsers = (state) => state.users.users;

export default usersSlice.reducer;
