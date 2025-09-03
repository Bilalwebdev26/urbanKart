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
//create action

export const productStore = configureStore({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  },
});
