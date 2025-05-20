import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, refreshUserThunk } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
    balance: 0,
    avatar: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {})
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, action) => initialState)
      .addCase(refreshUserThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const autReducer = slice.reducer;
