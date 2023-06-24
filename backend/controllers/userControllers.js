import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
// @desc Auth user & get Token
// @route POST/api/users/login
// access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    //SetJWT as HTTP-only Cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, //30days
    });
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error(`Invalid email or password`);
  }
});

// @desc registerUser
// @route POST/api/users
// access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register User ");
});
// @desc Logout User/clear cookie
// @route POST/api/users/logout
// access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout User ");
});

// @desc Get User Profile
// @route GET/api/users/profile
// access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("GET User Profile");
});

// @desc Get User Profile
// @route PUT/api/users/profile
// access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update User Profile");
});

// @desc Get All User
// @route GET/api/users
// access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("GET All User");
});

// @desc Get User By ID
// @route GET/api/users/:id
// access Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("GET UserById");
});

// @desc Delete User
// @route DELETE/api/users/:id
// access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("DElete User");
});

// @desc Update User
// @route PUT/api/users/:id
// access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update User");
});
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
