import mongoose from "mongoose";
const shippingSchema = new mongoose.Schema({
    shippingCharges:{
        type:Number,
        min:0,
        default:0
    }
})
export const Shipping = mongoose.model("Shipping",shippingSchema)