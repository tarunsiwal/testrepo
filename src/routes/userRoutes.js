import express from "express";
import {
  getUser,
  getUserByID,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, getUser);
router.get("/:id", auth, getUserByID);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

export default router;
