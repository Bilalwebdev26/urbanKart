import mongoose from "mongoose";
const orderAddressSchema = new mongoose.Schema(
  {
    streetAddress: {
      type: String,
      required: true,
    },
    appartmentFloor: String,
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);
const orderProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
      required: true,
    },
    size: String,
    color: String,
    images: {
      type: String,
    },
  },
  { _id: false }
);
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [orderProductSchema],
  shippingAddress: orderAddressSchema,
  paymentMethod: {
    type: String,
    enum: ["COD", "Bank"],
    required: true,
  },
  PaymentStatus: {
    type: String,
    default: "pending",
  },
  status: {
    type: String,
    enum: ["Processing", "Delivered", "Shipped", "Cancelled"],
    default: "Processing",
  },
  Price: {
    type: Number,
    required: true,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  deliveredAt: Date,
  isPaid: { type: Boolean, default: false },
  paidAt: Date,
  shippingPrice:Number
});
export const Order = mongoose.model("Order",orderSchema)