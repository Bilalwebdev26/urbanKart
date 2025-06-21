import { Product } from "../models/product.model.js";

export const addReview = async (req, res) => {
  const { comment, rating } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "Product not Available." });
    }
    //create review
    //ager pehle review kia to return ker do
    //is product per is user ka review para hua ha ager ho to return ker do werna review dal do
    const index = product.reviews.findIndex(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
    if (index > -1) {
      return res
        .status(400)
        .json({ message: "You already reviewed this product." });
    } else {
      //create review
      product.reviews.push({
        user: req.user._id,
        comment,
        rating,
      });
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, rat) => acc + rat.rating, 0) /
        product.numReviews;
      product.rating.toFixed(1);
      await product.save();
      return res.status(201).json({
        message: "Review Created successfully.",
        review: product.reviews,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while add review" });
  }
};
export const removeReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "Product not Available." });
    }
    //product ha to review find ker ke delete ker do
    const revIndex = product.reviews.findIndex(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
    if (revIndex < 0) {
      return res.status(400).json({ message: "Your Review not available." });
    }
    product.reviews.splice(revIndex, 1);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, rev) => acc + rev.rating, 0) /
      product.numReviews;
    product.rating.toFixed(1);
    await product.save();
    return res.status(200).json({
      message: "Review Deleted SuccessFully",
      review: product.reviews,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while delete review" });
  }
};
export const updateReview = async (req, res) => {
  const { comment, rating } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "Product not Available." });
    }
    const revIndex = product.reviews.findIndex(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
    if (revIndex < 0) {
      return res.status(400).json({ message: "Review not Available." });
    }
    product.reviews[revIndex].comment =
      comment || product.reviews[revIndex].comment;
    product.reviews[revIndex].rating =
      rating || product.reviews[revIndex].rating;
    //update rating
    product.rating =
      product.reviews.reduce((acc, rev) => acc + rev.rating, 0) /
      product.numReviews;
    await product.save();
    return res
      .status(200)
      .json({ message: "User Review update", review: product.reviews });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while delete review" });
  }
};
export const showAllProductRoutes = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(200).json({ message: "Product not Available." });
    }
    return res
      .status(200)
      .json({ message: "User Review Product ", review: product.reviews });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while display review" });
  }
};
