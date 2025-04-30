import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Setup baseURL
const API = axios.create({
  baseURL: "exp://10.0.0.159:8081:5000/api",
});

// Thunk to check if user exists
export const checkUser = createAsyncThunk(
  "auth/checkUser",
  async (phoneNumber, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/check-user", { phoneNumber });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk to register user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/register", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isUserExists: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetAuthState: (state) => {
      state.user = null;
      state.isUserExists = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isUserExists = action.payload.exists;
        state.user = action.payload.user || null;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
