import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cart: {},
  error: null,
  updating:false,
  loading: false,
};
//actions
export const fetchCartProducts = createAsyncThunk(
  "cart/fetchCartProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/cart/showall`,
        {
          withCredentials: true,
        }
      );
      console.log("Res cart", res);
      return res.data.cart;
    } catch (error) {
      return rejectWithValue(
        error.resposne.data || "Error while fetching Cart"
      );
    }
  }
);
export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ quantity, size, color, productId:id }, { rejectWithValue }) => {
    console.log("Product Id ",id )
    try {
      const res = await axios.put(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/cart/updatequantity/${id}`,
        {
          quantity,
          size,
          color,
        },
        {
          withCredentials: true,
        }
      );
      return res.data.cart;
    } catch (error) {
      return rejectWithValue(
        error.resposne.data || "Error while updating Products"
      );
    }
  }
);
//create slice

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //cases -> addCase
    builder
    //display All Cart Products
      .addCase(fetchCartProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loading = false;
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //Updating Cart Quantity
        .addCase(updateQuantity.pending, (state) => {
        state.updating = true;
        state.error = null;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.updating = false;
      })
      .addCase(updateQuantity.rejected, (state, action) => {
        state.updating = false;
        state.error = action.payload;
      })
  },
});
export const {} = cartSlice.actions;

export default cartSlice.reducer;
