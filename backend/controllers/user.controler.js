import { validationResult } from "express-validator";
import { User } from "../models/user.model.js";

const generateToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { refreshToken, accessToken };
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: `Error while generating token :${error.message}` });
  }
};

export const loginUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(401).json({ message: error.message || "Empty fields" });
  }
  const { email, password } = req.body;
  console.log(email);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User Not Found",tag:"email" });
    }
    const checkPass = await user.comparePassword(password);
    if (!checkPass) {
      return res.status(403).json({ message: "Password incorect",tag:"password" });
    }
    //token
    const { refreshToken, accessToken } = await generateToken(user._id);
    const usercheck = await User.findOne({ email }).select(
      "-password -refreshToken"
    );
    // Set cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true, // prevent JS access in browser
      secure: true, // set true if using HTTPS
      sameSite: "none", // CSRF protection
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res
      .status(200)
      .json({ message: "User logged In successfully", usercheck });
  } catch (error) {
    console.log("error in login :", error);
    return res
      .status(500)
      .json({ message: error.message || "Error while login" });
  }
};
export const registerUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(401)
      .json({ message: error.message || "All fileds are required" });
  }
  const { name, email, password } = req.body;
  console.log(name);
  console.log(email);
  console.log(password);

  try {
    let userCheck = await User.findOne({ email });
    if (userCheck) {
      return res
        .status(409)
        .json({ message: "User already exist with this email" });
    }
    userCheck = await User.create({
      name,
      email,
      password,
    });
    //token
    const { refreshToken, accessToken } = await generateToken(userCheck._id);
    const user = await User.findById(userCheck._id).select(
      "-password -refreshToken"
    );
    // Set cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true, // prevent JS access in browser
      secure: true, // set true if using HTTPS
      sameSite: "none", // CSRF protection
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res
      .status(201)
      .json({ message: "User Register Successfully", user });
  } catch (error) {
    console.log("error in register :", error);
    return res
      .status(500)
      .json({ message: error.message || "Error while Register" });
  }
};
export const logoutUser = async (req, res) => {
  try {
    console.log("Logout")
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User Not found" });
    }
    user.refreshToken = null;
    await user.save();
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res.status(200).json({ message: "User Logout Successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: error.message || "Error while Logout" });
  }
};
export const userProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      return res.status(404).json({ message: "User Not found" });
    }
    return res.status(200).json({ message: "User Profile", user });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: error.message || "Error while Show Profile" });
  }
};
export const changeUserPassword = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Minimum Password should be 6 Character" });
  }
  const { oldPassword, newPassword, confirmPassword } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const checkPass = await user.comparePassword(oldPassword);
    if (!checkPass) {
      return res.status(401).json({ message: "Password Incorrect" });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "Password Not Match" });
    }
    user.password = newPassword;
    user.refreshToken = null;
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    await user.save();
    const users = await User.findById(req.user._id).select(
      "-password -refreshToken"
    );
    return res
      .status(200)
      .json({ message: "Password SuccessFully Update", users });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Error while Change Password" });
  }
};
export const addAddress = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ message: "Add Address" });
  }
  const { address } = req.body;
  try {
    const usercheck = await User.findById(req.user._id);
    if (!usercheck) {
      return res.status(400).json({ message: "User Not Found" });
    }
    usercheck.address = address;
    await usercheck.save();
    const user = await User.findById(req.user._id).select(
      "-password -refreshToken"
    );
    return res.status(200).json({ message: "User address add", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Error while add address" });
  }
};
export const updateProfile = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ message: "Update Profile error" });
  }
  const { firstname, lastname, address } = req.body;
  try {
    const checkuser = await User.findById(req.user._id);
    if (!checkuser) {
      return res.status(404).json({ message: "User not found" });
    }
    checkuser.firstname = firstname;
    checkuser.lastname = lastname;
    checkuser.address = address;
    await checkuser.save();
    const user = await User.findById(req.user._id).select(
      "-password -refreshToken"
    );
    return res.status(200).json({ message: "User Profile Update ", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Error while update profile" });
  }
};
