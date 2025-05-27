import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, refreshUserThunk } from "./operations";
import { register, logOut } from "./operations";

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

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {})
      .addCase(loginThunk.fulfilled, (state, action) => {
        const { accessToken, ...userData } = action.payload;
        state.user = userData
        state.token = accessToken;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, action) => initialState)
      .addCase(refreshUserThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, () => initialState);
  },
});

export const authReducer = authSlice.reducer;
