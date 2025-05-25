import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const categoriesApi = axios.create({
  baseURL: "https://money-statistics-back-1.onrender.com/categories",
});

export const fetchCategories = createAsyncThunk(
  "categories/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await categoriesApi.get("/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
