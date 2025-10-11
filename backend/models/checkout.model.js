import mongoose from "mongoose";
const checkoutAddressSchema = new mongoose.Schema(
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
const checkoutProductSchema = new mongoose.Schema(
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
const checkoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shippingAddress: checkoutAddressSchema,
    products: [checkoutProductSchema],
    paymentMethod: {
      type: String,
      enum: ["COD", "PayPal"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    subTotal: {
      type: Number,
      required: true,
    },
    shippingPrice:Number,
    totalAmount: {
      //final amount after add shipping and coupons
      type: Number,
      required: true,
    },
    paymentDetail: {
      type: mongoose.Schema.Types.Mixed,
    },
    ispaid: {
      type: Boolean,
      default: false,
    },
    isfinalize: {
      type: Boolean,
      default: false,
    },
    isfinalizeAt:Date,
    paidAt: Date,
  },
  { timestamps: true }
);
export const Checkout = mongoose.model("Checkout", checkoutSchema);
