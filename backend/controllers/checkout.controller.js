import { Checkout } from "../models/checkout.model.js";
import { Shipping } from "../models/admin/shipping.model.js";
import { Order } from "../models/order.model.js";
import { Cart } from "../models/cart.model.js";
export const createCheckout = async (req, res) => {
  const { shippingAddress, products, subTotal, paymentMethod } = req.body;
  console.log("Req.body : ",shippingAddress, products, subTotal, paymentMethod)
  try {
    const shippingPrice = await Shipping.findOne({});
    const finalAmount = subTotal + (shippingPrice.shippingCharges || 0);
    const checkout = await Checkout.create({
      user: req.user._id,
      products: products,
      shippingAddress: shippingAddress,
      paymentMethod: paymentMethod,
      paymentStatus: "pending",
      subTotal: subTotal,
      totalAmount: finalAmount,
      ispaid: false,
      shippingPrice: shippingPrice.shippingCharges,
    });
    return res.status(201).json({ message: "Checkout Created ", checkout });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while creating checkout" });
  }
};
export const bankPay = async (req, res) => {
  const { paymentDetail, paymentStatus } = req.body;
  try {
    const checkout = await Checkout.findById(req.params.id);
    if (!checkout) {
      return res.status(400).json({ message: "First Create Checkout." });
    }
    if (paymentStatus === "paid") {
      checkout.paymentStatus = "paid";
      checkout.paymentDetail = paymentDetail;
      checkout.ispaid = true;
      checkout.paidAt = Date.now();
    } else if (paymentStatus === "failed") {
      checkout.paymentStatus = "failed";
      checkout.ispaid = false;
    } else {
      checkout.ispaid = false;
    }
    await checkout.save();
    return res
      .status(200)
      .json({ message: "Checkout status Updated", checkout });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while pay or update" });
  }
};
export const cashOnDelivery = async (req, res) => {
  try {
    console.log("Cash On Delivery api hit....")
    const checkout = await Checkout.findById(req.params.id);
    const shippingPrice = await Shipping.findOne({});
    if (!checkout) {
      return res.status(400).json({ message: "Checkout not created." });
    }
    if (checkout.isfinalize) {
      return res.status(400).json({ message: "Checkout already finalize." });
    }
    // Check if the selected payment method is COD
    if (checkout.paymentMethod !== "COD") {
      return res.status(400).json({ message: "Payment method is not COD" });
    }
    const order = await Order.create({
      user: checkout.user,
      products: checkout.products,
      shippingAddress: checkout.shippingAddress,
      paymentMethod: checkout.paymentMethod,
      PaymentStatus: "pending",
      status: "Processing",
      Price: checkout.totalAmount,
      isPaid: false,
      shippingPrice: shippingPrice.shippingCharges || 0,
    });
    (checkout.isfinalize = true), (checkout.isfinalizeAt = Date.now());
    await checkout.save();
    // clear cart
    await Cart.findOneAndDelete({ user: req.user._id });
    return res
      .status(201)
      .json({ message: "COD Order created Successfully.", order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `Error while Finalize COD : ${error}` });
  }
};
export const finalizeInOrderList = async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);
    if (!checkout) {
      return res.status(400).json({ message: "Checkout not Available." });
    }
    const shippingPrice = await Shipping.findOne({});
    if (checkout.ispaid && !checkout.isfinalize) {
      const order = await Order.create({
        user: checkout.user,
        products: checkout.products,
        shippingAddress: checkout.shippingAddress,
        paymentMethod: checkout.paymentMethod,
        PaymentStatus: "paid",
        status: "Processing",
        Price: checkout.totalAmount,
        isPaid: true,
        paidAt: Date.now(),
        shippingPrice: shippingPrice.shippingCharges || 0,
      });
      checkout.isfinalize = true;
      checkout.isfinalizeAt = Date.now();
      await checkout.save();
      //after create order delete cart data
      await Cart.findOneAndDelete({ user: req.user._id });
      return res
        .status(201)
        .json({ message: "Order created successfully", order });
    } else if (checkout.isfinalize) {
      return res.status(400).json({ message: "Checkout already created." });
    } else {
      return res.status(400).json({ message: "Checkout not paid." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while Finalize" });
  }
};
