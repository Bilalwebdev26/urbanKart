import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//initialstate
const initialState = {
  checkout: null,
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
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_UR}/api/v1/checkout/create`
      );
      return res.data.checkout;
    } catch (error) {}
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
      });
  },
});

export const {} = checkoutSlice.actions;

export default checkoutSlice.reducer;