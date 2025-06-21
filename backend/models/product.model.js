import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true, trim: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    percentOff: { type: Number, default: 0 },
    checkStock: { type: Boolean, default: true },
    units: { type: Number, default: 0 },
    sku: { type: String, required: true, unique: true },
    color: [{ type: String }],
    size: [{ type: String }],
    category: {
      type: String,
      required: true,
      enum: [
        "Woman's Fashion",
        "Men's Fashion",
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty",
      ],
    },
    brand: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    tags: [{ type: String }],
    soldUnits: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        altText: {
          type: String,
          required: true,
        },
      },
    ],
    isFlashSale: {
      type: Boolean,
      default: false,
    },
    saleStartDate: {
      type: Date,
    },
    saleEndData: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
