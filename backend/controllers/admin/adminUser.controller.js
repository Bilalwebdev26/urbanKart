import { User } from "../../models/user.model.js";

export const createUser = async (req, res) => {
  const { firstname, lastname, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({ message: "User email available" });
    }
    user = new User({
      firstname,
      lastname,
      email,
      password,
      role,
    });
    await user.save();
    return res
      .status(201)
      .json({ message: "User created successfully by admin", user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while create new user " });
  }
};
export const updateUserRole = async (req, res) => {
  const { role } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not exist" });
    }
    if (user._id.toString() === req.user._id.toString()) {
      return res.status().json({ message: "Admin can't changed his own role" });
    }
    user.role = role;
    await user.save();
    console.log("User : ", user);
    return res.status(202).json({ message: "User role updated", user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while update role" });
  }
};
export const showallUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      return res.status(404).json({ message: "not available user" });
    }
    return res.status(200).json({ message: "Fetch All users", users });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while update role" });
  }
};
export const showUserProfile = async (req, res) => {
  try {
    const usercheck = await User.findById(req.params.id);
    if (!usercheck) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = await User.findById(usercheck._id).select(
      "-password -refreshToken"
    );
    return res.status(200).json({ message: "Show user profile", user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while show user profile" });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const usercheck = await User.findById(req.params.id);
    if (!usercheck) {
      return res.status(404).json({ message: "User not exist" });
    }
    if (usercheck._id.toString() === req.user._id.toString()) {
      return res.status(401).json({ message: "You cannot delete yourself." });
    }
    const user = await User.findByIdAndDelete(usercheck._id);
    console.log("Deleted user : ", user);
    return res.status(200).json({ message: "User Deleted successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while show user profile" });
  }
};
export const filtersearchuser = async (req, res) => {
  const { firstname, lastname, email, role } = req.query;
  try {
    const filterConditions = [];

    if (firstname) {
      filterConditions.push({
        firstname: { $regex: firstname, $options: "i" },
      });
    }

    if (lastname) {
      filterConditions.push({ lastname: { $regex: lastname, $options: "i" } });
    }

    if (email) {
      filterConditions.push({ email: { $regex: email, $options: "i" } });
    }

    if (role) {
      filterConditions.push({ role: { $regex: role } });
    }

    const users = await User.aggregate([
      {
        $match: filterConditions.length > 0 ? { $or: filterConditions } : {},
      },
    ]);

    return res.status(200).json({ message: "Search user founded", users });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Error while show user profile" });
  }
};
