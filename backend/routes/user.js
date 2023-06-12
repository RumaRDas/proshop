import express from "express";
const router = express.Router();
import User from "../models/user.js";
import { check, validationResult } from "express-validator";

// @route   GET    api/users
// @desc    Test   route
// @access  Public
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("User route");
});

export default router;
