import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const categoriesApi = axios.create({
  baseURL: "https://money-statistics-back-1.onrender.com/categories",
});

const setAuthHeader = (token) => {
  categoriesApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchAll",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth?.token;
      if (!token) {
        return rejectWithValue("User is not authorized");
      }

      setAuthHeader(token);

      const response = await categoriesApi.get("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
