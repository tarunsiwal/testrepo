import User from "../models/userModel.js";
// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  try {
    const user = await User.find().select("-password");
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

export const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({
      usre: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const { name, email, role } = req.body;
  const updatedData = { name, email, role };
  try {
    const updatedUser = User.findOneAndUpdate(req.params.userId, updatedData, {
      new: true,
    }).select("-password");
    if (!updateUser) return res.status(400).json({ message: "User not found" });
    res.status(200).json({ name, email, role });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = User.findByIdAndDelete(req.params.userId);
    if (!deleteUser) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json({ message: "user is deleted successfully!" });
  } catch (error) {
    console.log(error);
  }
};
