import { Product } from "../models/product.model.js";
import { Wishlist } from "../models/wishlist.model.js";
export const addInWishList = async (req, res) => {
  try {
    //(1)First, query the Wishlist collection to check if a document for the current user (req.user._id) already exists.
    const wishlist = await Wishlist.findOne({ user: req.user._id });
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "Product Not Available." });
    }
    if (wishlist) {
      //(2)Check if the product is already in the wishlist (to avoid duplicates).
      const index = wishlist.products.findIndex(
        (prod) => prod._id.toString() === product._id.toString()
      );
      if (index > -1) {
        //if index is greater than -1 it mean product is availabe in wishlist so we return error
        return res
          .status(400)
          .json({ message: "The product is already in the wishlist." });
      } else {
        wishlist.products.push(product._id);
        await wishlist.save();
        return res
          .status(200)
          .json({ message: "Product save in user wishlist", wishlist });
      }
    } else {
      //Create a new wishlist document for the user and add the current product to the products array.
      const wishlist = await Wishlist.create({
        user: req.user._id,
        products: [product._id],
      });
      return res
        .status(200)
        .json({ message: "Product save in user wishlist", wishlist });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error while add Product in wishlist",
    });
  }
};
export const removeFromWishlist = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!product) {
      return res.status(400).json({ message: "Product not Avalable." });
    }
    if (!wishlist) {
      return res.status(400).json({ message: "wishlist is not available" });
    }
    const index = wishlist.products.findIndex(
      (prod) => prod._id.toString() === product._id.toString()
    );
    if (index > -1) {
      wishlist.products.splice(index, 1);
      await wishlist.save();
      return res.status(200).json({
        message: "Product deleted successfully from wishlist.",
        wishlist,
      });
    } else {
      return res
        .status(400)
        .json({ message: "Product not available in Wishlist." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error while delete Product in wishlist",
    });
  }
};
export const showAllWishlistProducts = async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist) {
      return res.status(400).json({ message: "Wishlist not Available." });
    }
    wishlist = await Wishlist.findById(wishlist._id).populate("products");
    return res.status(200).json({
      message: "Wishlist All Products.",
      wishlist,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error while show Wishlist Products.",
    });
  }
};
export const removeAll = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist) {
      return res.status(400).json({ message: "WishList not Available." });
    }
    wishlist.products = [];
    await wishlist.save();
    return res
      .status(200)
      .json({
        message: "SuccessFully Remove All Products From WishList",
        wishlist,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error while show Wishlist Products.",
    });
  }
};
