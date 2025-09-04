import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  salesProducts: [],
  bestSellingProducts: [],
  bestEachCategory: [],
  newArrivals: [],
  product: null,
  loading: false,
  error: null,
};
//create sales prodyucts action
export const fetchSalesProducts = createAsyncThunk(
  "products/fetchbySales",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/product/showsalesproducts`
      );
      console.log("Res : ", res);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalesProducts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSalesProducts.fulfilled, (state, action) => {
        state.salesProducts = action.payload;
        state.loading=false
      })
      .addCase(fetchSalesProducts.rejected,(state,action)=>{
        state.loading = true;
        state.error = action.payload;
      })
  },
});

export const { } = productSlice.actions

export default productSlice.reducer
