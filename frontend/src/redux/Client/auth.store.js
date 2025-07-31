import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const register = createAsyncThunk(
  "/auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/register`,
        userData,
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
export const login = createAsyncThunk(
  "/auth/login",
  async (FormData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/login`,
        FormData,
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || error);
    }
  }
);
export const userProfile = createAsyncThunk(
  "/auth/profile",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/profile`,
        { withCredentials: true }
      );
      return res.data.user;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error);
    }
  }
);
export const logout = createAsyncThunk(
  "/auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/logout`,{},
        {withCredentials:true}
      );
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error?.message);
    }
  }
);
const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default userSlice.reducer;
