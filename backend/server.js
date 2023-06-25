import express from "express";
// import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 5000;
connectDB(); //connect to MongoDB
const app = express();
//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser middleware
app.use(cookieParser());
///
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);

// app.get("/api/products", productRoutes);
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));
