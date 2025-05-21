import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import iziToast from "izitoast";
import toast from "react-hot-toast";

export const api = axios.create({
  // TODO: set real backend url
  baseURL: "http://localhost:3000",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("https://money-statistics-back-1.onrender.com/auth/login", body);
      setAuthHeader(data.accessToken);
      return data;
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

axios.defaults.baseURL = "https://connections-api.goit.global";

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
    "auth/register",
    async (userData, { rejectWithValue }) => {
        const {email, name, password} = userData;
        try {
            const response = await axios.post("https://money-statistics-back-1.onrender.com/auth/register", {name, email, password});
            return response.data;
        } catch (error) {
            const message =
                error.response?.data?.message ||
                "Sorry, something went wrong during registration. Please try again or contact support";
            toast.error(message);
            return rejectWithValue(message);
        }
    }
);
export const login = createAsyncThunk(
  'auth/login',
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', loginData);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // const response = await axios.post('/users/logout');
    // return response.data;
    await axios.post('https://money-statistics-back-1.onrender.com/auth/logout');
    clearAuthHeader();
    return;
  
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      //   console.log('response: ', response);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
