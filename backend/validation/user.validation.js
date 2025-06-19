import { body, ExpressValidator } from "express-validator";
export const loginValidate = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter proper email"),
  body("password").notEmpty().withMessage("Password is Required"),
];
export const registerValidate = [
  body("firstname").notEmpty().withMessage("First Name is required"),
  body("lastname").notEmpty().withMessage("Last Name is required"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter proper email"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be 6 character or long"),
];
export const passwordChangeValidate = [
  body("newPassword")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be 6 character long"),
];
export const addressValidate = [
  body("address").notEmpty().withMessage("Address is required"),
];
export const updateProfileValidate = [
  body("firstname").notEmpty().withMessage("First Name is required"),
  body("lastname").notEmpty().withMessage("Last Name is required"),
  body("address").trim().notEmpty().withMessage("Address is required"),
];
