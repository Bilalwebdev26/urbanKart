import express from "express";
import {
  addAddress,
  changeUserPassword,
  loginUser,
  logoutUser,
  registerUser,
  updateProfile,
  userProfile,
} from "../controllers/user.controler.js";
import {
  addressValidate,
  loginValidate,
  passwordChangeValidate,
  registerValidate,
  updateProfileValidate,
} from "../validation/user.validation.js";
import { checkUserAuth } from "../middlewares/auth.middleware.js";
import { rateLimter } from "../middlewares/rate-limit.middleare.js";
const router = express.Router();
router.post("/login", loginValidate,rateLimter, loginUser);
router.post("/register", registerValidate,rateLimter, registerUser);
router.post("/logout", checkUserAuth, logoutUser);
router.get("/profile", checkUserAuth, userProfile);
router.put(
  "/change-pasword",
  checkUserAuth,
  passwordChangeValidate,
  changeUserPassword
);
router.post("/addAddress", checkUserAuth, addressValidate, addAddress);
router.patch(
  "/updateProfile",
  checkUserAuth,
  updateProfileValidate,
  updateProfile
);
export default router;
