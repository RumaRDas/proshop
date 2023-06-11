import express from "express";
// import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import user from "./routes/user.js";
import profile from "./routes/profile.js";
import post from "./routes/post.js";
import auth from "./routes/auth.js";
const port = process.env.PORT || 5000;
connectDB(); //connect to MongoDB
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", user);
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/post", post);
app.use(notFound);
app.use(errorHandler);
//Define Routes
app.use("/api/users", user);
app.listen(port, () => console.log(`Server running on port ${port}`));
