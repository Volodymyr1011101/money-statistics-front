import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import iziToast from "izitoast";
import toast from "react-hot-toast";

export const api = axios.create({
  baseURL: "https://money-statistics-back-1.onrender.com",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/auth/login", body);
      setAuthHeader(data.data.accessToken);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error.message
      );
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;
      if (savedToken == null) {
        return thunkAPI.rejectWithValue("Empty token");
      }

      setAuthHeader(savedToken);
      const { data } = await api.get("/user");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || error.message
      );
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    const { email, name, password } = userData;
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      console.log(response);
      setAuthHeader(response.data.user.accessToken);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Sorry, something went wrong during registration. Please try again or contact support";
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await api.post("/auth/logout");
    clearAuthHeader();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message
    );
  }
});
