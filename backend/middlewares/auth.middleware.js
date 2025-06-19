import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const checkUserAuth = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "Token not available" });
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!decodedToken) {
      return res.status(403).json({ message: "Error in decoded token" });
    }
    const user = await User.findById(decodedToken._id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error in authentication" });
  }
};
export const checkAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== "admin") {
      return res.status(401).json({ message: "Only accessible by admin" });
    }
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error in while checking admin" });
  }
};
