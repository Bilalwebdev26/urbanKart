import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  shipping: null,
  loading: false,
  error: null,
};

export const shippingRates = createAsyncThunk(
  "admin/shipping",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/admin/shipping`,
        
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error);
    }
  }
);

const userSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(shippingRates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(shippingRates.fulfilled, (state, action) => {
        state.loading = false;
        state.shipping = action.payload.shippingCharges;
      })
      .addCase(shippingRates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});
export default userSlice.reducer;
