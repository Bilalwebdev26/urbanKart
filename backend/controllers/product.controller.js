import mongoose from "mongoose";
import { Product } from "../models/product.model.js";

export const showProductsbyCategory = async (req, res) => {
  const { category, minPrice, maxPrice, sortBy } = req.query;
  console.log(category);
  try {
    let filter = {};
    let sort = {};
    if (category) {
      filter.category = category;
    }
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }
      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }
    }
    if (sortBy) {
      if (sortBy === "lowTohigh") {
        sort = { price: 1 };
      } else if (sortBy === "highToLow") {
        sort = { price: -1 };
      } else if (sortBy === "popularity") {
        sort = { rating: -1 };
      } else {
        sort = {};
      }
    }

    const products = await Product.find(filter).sort(sort);
    if (!products) {
      return res
        .status(404)
        .json({ message: "Products not available in this category" });
    }
    return res.status(200).json({ message: "Category Products ", products });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while fetching products" });
  }
};

export const showProductId = async (req, res) => {
  try {
    console.log("Backend Api Hit")
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    return res.status(200).json({ message: "Product by Id", product });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while fetching product" });
  }
};
export const showSimillarProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const products = await Product.aggregate([
      {
        $match: {
          $and: [
            {
              $and: [
                { category: product.category },
                { tags: { $in: product.tags } },
              ],
            },
            {
              _id: { $ne: product._id },
            },
          ],
        },
      },
      {
        $limit: 4,
      },
    ]);
    return res.status(200).json({ message: "Similar Products Show", products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error while fetching similar product",
    });
  }
};
export const bestSellingProducts = async (req, res) => {
  try {
    const bestproducts = await Product.aggregate([
      {
        $match: {
          soldUnits: { $gte: 25 },
        },
      },
      {
        $sort: {
          rating: -1, // descending: highest rated first
        },
      },
      {
        $limit: 4,
      },
    ]);
    if (bestproducts.length < 1) {
      return res.status(404).json({
        message: `Best Seller Product not Found ${bestproducts.length}`,
      });
    }
    return res
      .status(200)
      .json({ message: "Show best selling products ", bestproducts });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error while fetching best selling product",
    });
  }
};
export const bestProductofEachCategory = async (req, res) => {
  try {
    const bestProducts = await Product.aggregate([
      {
        $match: {
          soldUnits: { $gte: 25 },
          rating: { $gte: 4 },
        },
      },
      {
        $sort: {
          rating: -1,
          soldUnits: -1,
        },
      },
      {
        $group: {
          _id: "$category",
          product: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: { newRoot: "$product" },
      },
      {
        $limit: 8, // If you want max 8 categories only
      },
    ]);
    if (!bestProducts) {
      return res.status(404).json({ message: "No Best Product available" });
    }
    return res
      .status(200)
      .json({ message: "Show best product for each category", bestProducts });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message:
        error.message ||
        "Error while fetching best selling product by category",
    });
  }
};
export const showFlashSalesProducts = async (req, res) => {
  try {
    let filter = {
      percentOff: { $gte: 25 },
    };
    const saleProducts = await Product.find(filter).sort({ percentOff:-1,numReviews: -1 }).limit(8);
    if (saleProducts.length <= 0) {
      return res.status(400).json({ message: "No Sale product available" });
    }
    return res
      .status(200)
      .json({ message: "Showing sale products.", saleProducts });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error while fetching sale products.",
    });
  }
};
export const newArrivalProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 }).limit(8);
    if (!products) {
      return res
        .status(400)
        .json({ message: "No Product available", products });
    }
    return res
      .status(200)
      .json({ message: "Show newly add Products.", products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error while fetching newly arived products.",
    });
  }
};
