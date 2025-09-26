import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  review: [],
  loading: false,
  error: null,
};
//actions

//Add product review
export const addProductReview = createAsyncThunk(
  "review/addProductReview",
  async ({ productId, comment, rating }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_BACKEND_UR
        }/api/v1/review/addreview/${productId}`,
        {
          comment,
          rating,
        },
        { withCredentials: true }
      );
      return res.data.review;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Error while add product Review"
      );
    }
  }
);
//show all product Reviews
export const showProductReview = createAsyncThunk(
  "review/showProductReview",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_UR
        }/api/v1/review/showReviews/${productId}`,

        { withCredentials: true }
      );
      return res.data.review;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Error while add product Review"
      );
    }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //For add product review
      .addCase(addProductReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductReview, (state, action) => {
        state.review = action.payload;
        state.loading = false;
      })
      .addCase(addProductReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default reviewSlice.reducer;
