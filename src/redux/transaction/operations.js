import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://money-statistics-back-1.onrender.com/transactions",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchAllTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth?.token;
      if (!token) {
        return rejectWithValue("User is not authorized");
      }

      setAuthHeader(token);

      const response = await api.get("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchTransactions = createAsyncThunk(
  "transactions/summary",
  async (period, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth?.token;
      if (!token) {
        return rejectWithValue("User is not authorized");
      }
      setAuthHeader(token);
      const response = await api.get(`/summary?period=${period}`);
      return response.data.stats;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const createTransaction = createAsyncThunk(
  "transactions/create",
  async (transactionData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth?.token;
      if (!token) {
        return rejectWithValue("User is not authorized");
      }
      setAuthHeader(token);
      const response = await api.post("/create", transactionData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions/update",
  async ({ id, updatedData }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth?.token;
      if (!token) {
        return rejectWithValue("User is not authorized");
      }
      setAuthHeader(token);
      const response = await api.put(`/update/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "transactions/delete",
  async (id, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth?.token;
      if (!token) {
        return rejectWithValue("User is not authorized");
      }
      setAuthHeader(token);
      await api.delete(`/delete/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
