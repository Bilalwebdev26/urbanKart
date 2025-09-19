import{createAsyncThunk,createSlice} from "@reduxjs/toolkit"
//initialstate
const initialState = {
    checkout:null,
    error:null,
    loading:false
}
//Checkout actions
//Checkout Slice
const checkoutSlice = createSlice({
    name:"checkout",
    initialState,
    reducer:{}
})