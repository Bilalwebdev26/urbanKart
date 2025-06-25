import { Shipping } from "../../models/admin/shipping.model.js";
export const setShippingPrice = async (req, res) => {
  const { shippingPrice } = req.body;
  try {
    let shippingDoc = await Shipping.findOne({});
    if (!shippingDoc) {
      shippingDoc = await Shipping.create({ shippingCharges: shippingPrice });
    } else {
      shippingDoc.shippingCharges = shippingPrice;
      await shippingDoc.save();
    }
    return res
      .status(200)
      .json({ message: "Shipping Price Updated", shippingDoc });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while updating Price" });
  }
};
export const getShippingPrice = async (req, res) => {
  try {
    const shippingDoc = await Shipping.findOne();
    return res.status(200).json({ message: "Shipping Price ", shippingCharges:shippingDoc?.shippingCharges||0 });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while Showing Shipping Price" });
  }
};
