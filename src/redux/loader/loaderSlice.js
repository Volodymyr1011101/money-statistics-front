import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: false,
  extraReducers: (builder) =>
    builder
      .addMatcher(
        (action) => {
          return action.type.endsWith("pending");
        },
        () => {
          return true;
        }
      )
      .addMatcher(
        (action) => {
          return (
            action.type.endsWith("fulfilled") ||
            action.type.endsWith("rejected")
          );
        },
        () => {
          return false;
        }
      ),
});

export default loaderSlice.reducer;
