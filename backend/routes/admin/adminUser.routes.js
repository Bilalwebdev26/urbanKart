import express from "express";
import {
  createUser,
  deleteUser,
  filtersearchuser,
  showallUsers,
  showUserProfile,
  updateUserRole,
} from "../../controllers/admin/adminUser.controller.js";
import {
  checkAdmin,
  checkUserAuth,
} from "../../middlewares/auth.middleware.js";
const router = express.Router();
router.get("/", checkUserAuth, checkAdmin, showallUsers); //show all users
router.put("/updateRole/:id", checkUserAuth, checkAdmin, updateUserRole); //update user role
router.post("/createnewuser", checkUserAuth, checkAdmin, createUser); //create new user
router.delete("/delete/:id", checkUserAuth, checkAdmin, deleteUser); //delete user
router.get("/filtersearch", checkUserAuth, checkAdmin, filtersearchuser); //search user by filter
router.get("/:id", checkUserAuth, checkAdmin, showUserProfile); //show user profile
export default router;
