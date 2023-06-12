import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Fetch all product
// @route GEt/api/products
// access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // res.status(401);
  // throw new Error("NOT AUTHORIZED");
  res.json(products);
});

// @desc Fetch a single product
// @route GEt/api/products/:id
// access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  }
  res.status(404);
  throw new Error("Resource not found");
});

export { getProducts, getProductById };
