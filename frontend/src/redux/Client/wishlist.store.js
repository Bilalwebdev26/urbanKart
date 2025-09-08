import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  wishListProducts: [],
  loading: true,
  error: null,
};
//wishlist : showAll getWishListProducts
export const getWishListProducts = createAsyncThunk(
  "wishlist/getWishListProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/wishlist/showall`,
        { withCredentials: true }
      );
      console.log("Data Fetch : ", res.data);
      return res.data.wishlist.products;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
//wishlist : Add Product in wisslist
export const addProductInWishlist = createAsyncThunk(
  "wishlist/addProductInWishlist",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/wishlist/addinwishlist/${id}`,
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
//wishlist : Delete Product in wisslist
export const deleteProductFromWishlist = createAsyncThunk(
  "wishlist/deleteProductFromWishlist",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/wishlist/deleteproduct/${id}`,
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
//wishlist : Delete All Products from wisslist
export const deleteAllProductsFromWishlist = createAsyncThunk(
  "wishlist/deleteAllProductsFromWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/wishlist/deleteAll`,
        {},
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //show all wishlist products
      .addCase(getWishListProducts.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getWishListProducts.fulfilled, (state, action) => {
        (state.wishListProducts = action.payload), (state.loading = false);
      })
      .addCase(getWishListProducts.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      })
      //Add product in wishlist products -> push kerna wishlist ki array me
      .addCase(addProductInWishlist.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      // .addCase(addProductInWishlist.fulfilled, (state, action) => {
      //   (state.wishListProducts = state.wishListProducts.push(action.payload)),
      //     (state.loading = false);
      // })
      .addCase(addProductInWishlist.fulfilled, (state, action) => {
        // agar API se product object milta hai
        state.wishListProducts.push(action.payload);
        state.loading = false;
      })
      .addCase(addProductInWishlist.rejected, (state, action) => {
        (state.loading = true), (state.error = action.payload);
      })
      //Delete product in wishlist products -> pop kerna wishlist ki array me
      .addCase(deleteProductFromWishlist.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      // .addCase(deleteProductFromWishlist.fulfilled, (state, action) => {
      //   state.wishListProducts.filter((item) => item._id !== action.payload),
      //     (state.loading = false);
      // })
      .addCase(deleteProductFromWishlist.fulfilled, (state, action) => {
        // yaha payload id ya product._id hona chahiye
        state.wishListProducts = state.wishListProducts.filter(
          (item) => item._id !== action.payload
        );
        state.loading = false;
      })
      .addCase(deleteProductFromWishlist.rejected, (state, action) => {
        (state.loading = true), (state.error = action.payload);
      })
      //Delete All products from wishlist products -> delete all kerna wishlist ki array
      .addCase(deleteAllProductsFromWishlist.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(deleteAllProductsFromWishlist.fulfilled, (state, action) => {
        (state.wishListProducts = action.payload), (state.loading = false);
      })
      .addCase(deleteAllProductsFromWishlist.rejected, (state, action) => {
        (state.loading = true), (state.error = action.payload);
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = wishlistSlice.actions;

export default wishlistSlice.reducer;
