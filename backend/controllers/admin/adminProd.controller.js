import { Product } from "../../models/product.model.js";
export const createProduct = async (req, res) => {
  const {
    name,
    desc,
    price,
    percentOff,
    units,
    sku,
    category,
    brand,
    tags,
    images,
  } = req.body;
  try {
    const product = new Product({
      name,
      desc,
      price,
      percentOff,
      units,
      sku,
      category,
      brand,
      tags,
      images,
      user: req.user._id,
    });
    await product.save();
    return res.status(201).json({ message: "Product created", product });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while creating product" });
  }
};
export const showAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      return res.status(400).json({ message: "No Product Available" });
    }
    return res.status(200).json({ message: "Fetch All Products", products });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while Fetching products." });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }
    await Product.findByIdAndDelete(product._id);
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while deleting product." });
  }
};
export const updateProduct = async (req, res) => {
  const {
    name,
    desc,
    price,
    percentOff,
    units,
    sku,
    color,
    size,
    category,
    brand,
    tags,
    images,
  } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "Product not Found." });
    }
    product.name = name || product.name;
    product.desc = desc || product.desc;
    product.price = price || product.price;
    product.percentOff = percentOff || product.percentOff;
    product.units = units || product.units;
    product.sku = sku || product.sku;
    product.category = category || product.category;
    product.brand = brand || product.brand;
    product.color = color || product.color;
    product.size = size || product.size;
    product.tags = tags || product.tags;
    product.images = images || product.images;
    await product.save();
    return res
      .status(202)
      .json({ message: "Product update SuccessFull.", product });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while update product." });
  }
};
export const setFeaturedproduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "Product not Found." });
    }
    product.isFeatured = !product.isFeatured;
    await product.save();
    return res
      .status(200)
      .json({ message: "Product Featured Update", product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error while update featured product.",
    });
  }
};
export const setInSaleListing = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "Product not Found." });
    }
    product.isFlashSale = !product.isFlashSale;
    await product.save();
    return res.status(200).json({
      message: `Is in sale: ${product.isFlashSale ? "yes" : "No"}`,
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error while set sale product.",
    });
  }
};
export const setDateforSale = async (req, res) => {
    const{saleStartDate,saleEndData}=req.body
  try {
    const products = await Product.find({ isFlashSale: true });
    if (!products) {
      return res.status(400).json({ message: "No product Found." });
    }
    return res
      .status(200)
      .json({ message: "Sales product live.", products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Error while get sale products.",products
    });
  }
};
