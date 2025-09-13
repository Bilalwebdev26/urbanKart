import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  salesProducts: [],
  bestSellingProducts: [],
  simillarProducts:[],
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
//create action bestselling products
export const fetchBestSellingProducts = createAsyncThunk(
  "product/fetchBestSellingProduct",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/product/bestsellingproducts`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//create action new arrivals products
export const fetchNewArrivalsProducts = createAsyncThunk(
  "product/fetchNewArrivalsProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/product/newproducts`
      );

      return res.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//create action best selling products for each category
export const fetchBestSellingForEachCategory = createAsyncThunk(
  "product/fetchBestSellingForEachCategory",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/product/bestproductforeachcatgeory`
      );
      return res.data.bestProducts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchSimillarProducts = createAsyncThunk(
  "product/fetchSimillarProducts",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get( `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/product/similarproducts/${id}`)
        console.log("Res.data Simillar : ",res)
        return res.data.products
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalesProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSalesProducts.fulfilled, (state, action) => {
        state.salesProducts = action.payload;
        state.loading = false;
      })
      .addCase(fetchSalesProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(fetchBestSellingProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBestSellingProducts.fulfilled, (state, action) => {
        state.bestSellingProducts = action.payload;
        state.loading = false;
      })
      .addCase(fetchBestSellingProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(fetchSimillarProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSimillarProducts.fulfilled, (state, action) => {
        state.simillarProducts = action.payload;
        state.loading = false;
      })
      .addCase(fetchSimillarProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(fetchNewArrivalsProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewArrivalsProducts.fulfilled, (state, action) => {
        state.newArrivals = action.payload;
        state.loading = false;
      })
      .addCase(fetchNewArrivalsProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(fetchBestSellingForEachCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBestSellingForEachCategory.fulfilled, (state, action) => {
        state.bestEachCategory = action.payload;
        state.loading = false;
      })
      .addCase(fetchBestSellingForEachCategory.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
