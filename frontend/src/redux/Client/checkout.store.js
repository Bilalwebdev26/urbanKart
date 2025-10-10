import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//initialstate
const initialState = {
  checkout: null,
  order:null,
  error: null,
  loading: false,
};
//Checkout actions
export const createCheckout = createAsyncThunk(
  "checkout/create",
  async (
    { shippingAddress, products, subTotal, paymentMethod },
    { rejectWithValue }
  ) => {
    try {
      console.log("Api hitted to create checkout");
      console.log("🧾 Checkout Payload:", {
        shippingAddress,
        products,
        subTotal,
        paymentMethod,
      });
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/checkout/create`,
        { shippingAddress, products, subTotal, paymentMethod },
        { withCredentials: true }
      );
      console.log("Checkout : ",res)
      return res.data.checkout;
    } catch (error) {
      return rejectWithValue(
        error?.response.data || "Error while create checkout"
      );
    }
  }
);
export const finalizeCODOrder = createAsyncThunk(
  "checkout/createorder",
  async (
    id,
    { rejectWithValue }
  ) => {
    try {
      console.log("Api hitted to COD create order");
      console.log("ID from final COD : ",id);
      
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/checkout/cod/${id}`,{},
        { withCredentials: true }
      );
      console.log("URL : ", `${import.meta.env.VITE_BACKEND_URL}/api/v1/checkout/cod/${id}`)
      console.log("Checkout : ",res)
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error?.response.data || "Error while create checkout"
      );
    }
  }
);
//Checkout Slice
const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCheckout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCheckout.fulfilled, (state, action) => {
        state.checkout = action.payload;
        state.loading = false;
      })
      .addCase(createCheckout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(finalizeCODOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(finalizeCODOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.loading = false;
      })
      .addCase(finalizeCODOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = checkoutSlice.actions;

export default checkoutSlice.reducer;
