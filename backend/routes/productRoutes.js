import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productControllers.js";
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
export default router;
