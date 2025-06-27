import { Order } from "../models/order.model.js";

export const getAllOrder = async (req, res) => {
  try {
    const order = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    if (!order) {
      return res.status(400).json({ message: "Order not exist" });
    }
    return res.status(200).json({ nessage: "Show all User Orders", order });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error while show Priducts in  COD" });
  }
};
export const showOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user","firstname lastname email");
    if (!order) {
      return res.status(400).json({ message: "Order not found." });
    }
    return res.status(200).json({ message: "Show order by ID." ,order});
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error while show products in COD" });
  }
};
