const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const HoldingModel = require("./model/HoldingsModel");
const PositionModel = require("./model/PositionsModel");
const OrderModel = require("./model/OrdersModel");
const authRoute = require("./routes/AuthRoute");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;

/* GLOBAL MIDDLEWARE */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

/* ROUTES  */

// Auth routes
app.use("/api/auth", authRoute);

// Health check
app.get("/test", (req, res) => {
  res.status(200).json({ status: "OK", message: "Backend is running" });
});

/* PROTECTED DATA ROUTES */

// (Later you can protect these with JWT middleware)

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingModel.find({});
    res.status(200).json(allHoldings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionModel.find({});
    res.status(200).json(allPositions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrderModel(req.body);
    await newOrder.save();
    res.status(201).json({ success: true, message: "Order received" });
  } catch (err) {
    res.status(500).json({ message: "Order creation failed" });
  }
});

/* ================= SERVER ================= */

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Backend server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
