const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// DB connect
connectDB();

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});