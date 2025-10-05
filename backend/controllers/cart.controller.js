import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";
export const addProductInCart = async (req, res) => {
  const { size, color, images, quantity = 1 } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "Product not Available." });
    }
    if (product.units <= 0 && !product.checkStock) {
      return res.status(400).json({ message: "Product Out-of-Stock." });
    }
    const cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      const prodIndex = cart.products.findIndex(
        (prod) =>
          prod.productId.toString() === product._id.toString() &&
          prod.size === size &&
          prod.color === color
      );
      if (prodIndex > -1) {
        cart.products[prodIndex].quantity += quantity;
      } else {
        cart.products.push({
          productId: req.params.id,
          name: product.name,
          price: product.price,
          size,
          color,
          images: product.images[0].url,
          quantity,
        });
      }
      //calculate total Price
      cart.totalPrice = cart.products.reduce(
        (acc, prod) => acc + prod.price * prod.quantity,
        0
      );
      await cart.save();
      return res
        .status(200)
        .json({ message: "Cart updated Successfully", cart });
    } else {
      //create cart
      console.log("Product.price : ", product.price);
      console.log("Product.quantity : ", product.quantity);
      const newcart = await Cart.create({
        user: req.user._id,
        products: [
          {
            productId: req.params.id,
            name: product.name,
            price: product.price,
            size,
            color,
            images: product.images[0].url,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
      //await newcart.save();
      return res.status(201).json({
        message: "Product Craeted in New Cart Successfully.",
        cart: newcart,
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Product Failed to add in cart" });
  }
};
export const updateQunatity = async (req, res) => {
  const { quantity, size, color } = req.body;
  console.log(req.body);
  if (isNaN(quantity) || quantity < 1) {
    return res
      .status(400)
      .json({ message: "Product quantity should be valid." });
  }
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "Product not available." });
    }
    if (quantity > product.units) {
      return res.status(400).json({
        message: "The requested quantity exceeds the available stock.",
      });
    }
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(400).json({ message: "Cart not Availble." });
    }
    console.log("Cart : ", cart);
    const prodIndex = cart.products.findIndex(
      (prod) =>
        prod.productId.toString() === product._id.toString() &&
        prod.size === size &&
        prod.color === color
    );
    console.log("prodIndex : ", prodIndex);
    if (prodIndex < 0) {
      return res
        .status(400)
        .json({ message: "Product not available in cart." });
    }
    cart.products[prodIndex].quantity = quantity;
    cart.totalPrice = cart.products.reduce(
      (acc, prod) => acc + prod.price * prod.quantity,
      0
    );
    await cart.save();
    return res.status(200).json({ message: "Product Quantity updated", cart });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Product Failed to add in cart" });
  }
};
export const removeProductFromCart = async (req, res) => {
  const { size, color } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({ message: "Product not Available." });
    }
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(400).json({ message: "Cart not Available." });
    }
    const prodIndex = cart.products.findIndex(
      (prod) =>
        prod.productId.toString() === product._id.toString() &&
        prod.size === size &&
        prod.color === color
    );
    console.log("prodIndex : ", prodIndex);
    if (prodIndex < 0) {
      return res
        .status(400)
        .json({ message: "Product not available in cart." });
    }
    cart.products = cart.products.filter(
      (prod) =>
        prod.productId.toString() !== product._id.toString() ||
        prod.size !== size ||
        prod.color !== color
    );
    cart.totalPrice = cart.products.reduce(
      (acc, prod) => acc + prod.price * prod.quantity,
      0
    );
    await cart.save();
    return res
      .status(200)
      .json({ message: "Product successfully remove from cart", cart });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Product Failed to delete in cart" });
  }
};
export const showAll = async (req, res) => {
  console.log("Cart call");
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(400).json({ message: "Cart not available." });
    }
    return res.status(200).json({ message: "Cart Data.", cart });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Cart products failed to show." });
  }
};
export const deleteAllCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(400).json({ message: "Cart not available." });
    }
    if (!cart.products && cart.products.length === 0) {
      return res.status(400).json({ message: "Cart has no products." });
    }
    cart.products = [];
    cart.totalPrice = 0;
    await cart.save();
    return res.status(200).json({ message: "Your cart is now empty.", cart });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Cart products failed to remove." });
  }
};
