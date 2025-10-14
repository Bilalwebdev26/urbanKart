import { Order } from "../../models/order.model.js";
export const showAllOrders = async (req, res) => {
  try {
    //TODO : pagination add ->20 order single line
    const orders = await Order.find().sort({ createdAt: -1 });
    if (!orders || orders.length === 0) {
      return res.status(400).json({ message: "No order Placed." });
    }
    return res.status(200).json({ message: "Orders Display.", orders });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while display Orders." });
  }
};
export const markDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(400).json({ message: "No Order found" });
    }
    if (order.isDelivered) {
      return res.status(400).json({ message: "Order is already delivered." });
    }
    order.status = "Delivered";
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    if (order.paymentMethod === "COD") {
      order.PaymentStatus = "paid";
      order.isPaid = true;
      order.paidAt = Date.now();
    }
    order.statusHistory = order.statusHistory || [];
    order.statusHistory.push({
      updatedBy: req.user._id,
      status: "Delivered",
      updatedAt: Date.now(),
    });
    await order.save();
    return res.status(200).json({ message: "Order status Updated.", order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while update Orders." });
  }
};
export const updateOrderStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }
    if (["Delivered", "Cancelled"].includes(order.status)) {
      return res
        .status(400)
        .json({ message: `Order ${order.status} status can't be changed.` });
    }
    // if (order.status === "Delivered") {
    //   return res
    //     .status(400)
    //     .json({ message: "Order Cancelled status can't be changed." });
    // }
    //for order cancelled
    if (status === "Cancelled") {
      order.status = status || "Cancelled";
      order.statusHistory = order.statusHistory || [];
      order.statusHistory.push({
        updatedBy: req.user._id,
        status: status,
        updatedAt: Date.now(),
      });
      await order.save();
      return res
        .status(200)
        .json({ message: "Order cancelled SuccessFully.", order });
    }
    const checkDeliverTransition = ["Processing", "Shipped"];
    if (
      status === "Delivered" &&
      !checkDeliverTransition.includes(order.status)
    ) {
      return res
        .status(400)
        .json({ message: "Cancelled Order cant't be delivered." });
    }
    //for shipped and processing
    if (status === "Shipped" || status === "Processing") {
      order.status = status;
      order.statusHistory = order.statusHistory || [];
      order.statusHistory.push({
        updatedBy: req.user._id,
        status: status,
        updatedAt: Date.now(),
      });
      await order.save();
      return res.status(201).json({ message: "Order Status Updated.", order });
    }
    //for COD
    if (order.paymentMethod === "COD" && status === "Delivered") {
      order.status = status || "Delivered";
      order.PaymentStatus = "paid";
      order.isPaid = true;
      order.paidAt = Date.now();
      order.isDelivered = true;
      order.deliveredAt = Date.now();
      order.statusHistory = order.statusHistory || [];
      order.statusHistory.push({
        updatedBy: req.user._id,
        status: status,
        updatedAt: Date.now(),
      });
      await order.save();
      return res.status(201).json({ message: "Order Status Updated.", order });
    }
    //for bank
    order.status = status || order.status;
    if (status === "Delivered") {
      order.isDelivered = true;
      order.deliveredAt = Date.now();
    }
    order.statusHistory = order.statusHistory || [];
    order.statusHistory.push({
      updatedBy: req.user._id,
      status: status,
      updatedAt: Date.now(),
    });
    await order.save();
    return res.status(201).json({ message: "Order Status Updated.", order });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error while update Order Status." });
  }
};
export const showOrdersByStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.find({ status: status });
    if (!order || order.length === 0) {
      return res
        .status(400)
        .json({ message: `Orders not Available with status : ${status}` });
    }
    return res
      .status(200)
      .json({ message: `Orders Available with status : ${status}`, order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while Show Order Status." });
  }
};
