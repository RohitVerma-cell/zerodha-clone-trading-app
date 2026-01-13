// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const HoldingModel = require('./model/HoldingsModel');
// const PositionModel = require('./model/PositionsModel');
// const OrderModel = require('./model/OrdersModel');
// require('dotenv').config();
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// const cookieParser = require("cookie-parser");
// const authRoute = require("./routes/AuthRoute");

// const PORT = process.env.PORT;
// const uri = process.env.MONGO_URI;

// // app.use(
// //   cors({
// //     origin: ["http://localhost:3002"],
// //     methods: ["GET", "POST", "PUT", "DELETE"],
// //     credentials: true,
// //   })
// // );
// app.use(
//   cors({
//     origin: "http://localhost:5173", // frontend URL
//     credentials: true,               // allow cookies
//   })
// );
// app.use(cookieParser());

// app.use(express.json());

// app.use("/", authRoute);

// // app.get('/appHoldings', async (req, res) => {      
// //     let tempHoldings = [
// //         {
// //             name: "BHARTIARTL",
// //             qty: 2,
// //             avg: 538.05,
// //             price: 541.15,
// //             net: "+0.58%",
// //             day: "+2.99%",
// //         },
// //         {
// //             name: "HDFCBANK",
// //             qty: 2,
// //             avg: 1383.4,
// //             price: 1522.35,
// //             net: "+10.04%",
// //             day: "+0.11%",
// //         },
// //         {
// //             name: "HINDUNILVR",
// //             qty: 1,
// //             avg: 2335.85,
// //             price: 2417.4,
// //             net: "+3.49%",
// //             day: "+0.21%",
// //         },
// //         {
// //             name: "INFY",
// //             qty: 1,
// //             avg: 1350.5,
// //             price: 1555.45,
// //             net: "+15.18%",
// //             day: "-1.60%",
// //             isLoss: true,
// //         },
// //         {
// //             name: "ITC",
// //             qty: 5,
// //             avg: 202.0,
// //             price: 207.9,
// //             net: "+2.92%",
// //             day: "+0.80%",
// //         },
// //         {
// //             name: "KPITTECH",
// //             qty: 5,
// //             avg: 250.3,
// //             price: 266.45,
// //             net: "+6.45%",
// //             day: "+3.54%",
// //         },
// //         {
// //             name: "M&M",
// //             qty: 2,
// //             avg: 809.9,
// //             price: 779.8,
// //             net: "-3.72%",
// //             day: "-0.01%",
// //             isLoss: true,
// //         },
// //         {
// //             name: "RELIANCE",
// //             qty: 1,
// //             avg: 2193.7,
// //             price: 2112.4,
// //             net: "-3.71%",
// //             day: "+1.44%",
// //         },
// //         {
// //             name: "SBIN",
// //             qty: 4,
// //             avg: 324.35,
// //             price: 430.2,
// //             net: "+32.63%",
// //             day: "-0.34%",
// //             isLoss: true,
// //         },
// //         {
// //             name: "SGBMAY29",
// //             qty: 2,
// //             avg: 4727.0,
// //             price: 4719.0,
// //             net: "-0.17%",
// //             day: "+0.15%",
// //         },
// //         {
// //             name: "TATAPOWER",
// //             qty: 5,
// //             avg: 104.2,
// //             price: 124.15,
// //             net: "+19.15%",
// //             day: "-0.24%",
// //             isLoss: true,
// //         },
// //         {
// //             name: "TCS",
// //             qty: 1,
// //             avg: 3041.7,
// //             price: 3194.8,
// //             net: "+5.03%",
// //             day: "-0.25%",
// //             isLoss: true,
// //         },
// //         {
// //             name: "WIPRO",
// //             qty: 4,
// //             avg: 489.3,
// //             price: 577.75,
// //             net: "+18.08%",
// //             day: "+0.32%",
// //         },
// //     ];

// //     tempHoldings.forEach((item) => {
// //         let newHolding = new HoldingModel({
// //             name: item.name,
// //             qty: item.qty,
// //             avg: item.avg,
// //             price: item.price,
// //             net: item.net,
// //             day: item.day,
// //         })
// //         newHolding.save()
// //     })
// //     res.send('Holdings added to database');
// // })

// // app.get('/appPositions', (req, res) => {
// //     let tempPositions = [
// //         {
// //     product: "CNC",
// //     name: "EVEREADY",
// //     qty: 2,
// //     avg: 316.27,
// //     price: 312.35,
// //     net: "+0.58%",
// //     day: "-1.24%",
// //     isLoss: true,
// //   },
// //   {
// //     product: "CNC",
// //     name: "JUBLFOOD",
// //     qty: 1,
// //     avg: 3124.75,
// //     price: 3082.65,
// //     net: "+10.04%",
// //     day: "-1.35%",
// //     isLoss: true,
// //   },
// //     ];

// //     tempPositions.forEach((item) => {
// //         let newPosition = new PositionModel({
// //             product: item.product,
// //             name: item.name,
// //             qty: item.qty,
// //             avg: item.avg,
// //             price: item.price,
// //             net: item.net,
// //             day: item.day,
// //             isLoss: item.isLoss,
// //         })
// //         newPosition.save()
// //     })
// //     res.send('Positions added to database');
// // })

// app.get('/allHoldings', async (req, res) => {
//     let allHoldings = await HoldingModel.find({});
//     res.json(allHoldings);
// })

// app.get('/allPositions', async (req, res) => {
//     let allPositions = await PositionModel.find({});
//     res.json(allPositions);
// })

// app.post('/newOrder', (req, res) => {
//     let newOrder = new OrderModel({
//         name: req.body.name,
//         qty: req.body.qty,
//         price: req.body.price,
//         mode: req.body.mode,
//     });
//     newOrder.save();
//     res.send('Order received');
// });

// app.listen(PORT, () => {
//     console.log('Backend server is running on port' + PORT);
//     mongoose.connect(uri);
//     console.log('Connected to MongoDB');
// })


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// require("dotenv").config();

// const HoldingModel = require("./model/HoldingsModel");
// const PositionModel = require("./model/PositionsModel");
// const OrderModel = require("./model/OrdersModel");
// const authRoute = require("./routes/AuthRoute");

// const app = express();
// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URI;

// /* ================= MIDDLEWARE ================= */

// // Parse JSON
// app.use(express.json());

// // Parse cookies
// app.use(cookieParser());

// // CORS — ONLY ONCE
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// /* ================= ROUTES ================= */

// // Auth routes
// // app.use("/signup", authRoute);
// app.use("/api/auth", authRoute);

// // Health check (VERY IMPORTANT)
// app.get("/test", (req, res) => {
//   res.send("Backend is running");
// });

// // Data routes
// app.get("/allHoldings", async (req, res) => {
//   const allHoldings = await HoldingModel.find({});
//   res.json(allHoldings);
// });

// app.get("/allPositions", async (req, res) => {
//   const allPositions = await PositionModel.find({});
//   res.json(allPositions);
// });

// app.post("/newOrder", async (req, res) => {
//   const newOrder = new OrderModel(req.body);
//   await newOrder.save();
//   res.json({ success: true, message: "Order received" });
// });

// /* ================= SERVER ================= */

// app.listen(PORT, async () => {
//   console.log(`Backend server running on port ${PORT}`);
//   await mongoose.connect(uri);
//   console.log("Connected to MongoDB");
// });

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

/* ================= GLOBAL MIDDLEWARE ================= */

// Parse JSON body
app.use(express.json());

// Parse cookies
app.use(cookieParser());

// CORS (single, correct configuration)
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

/* ================= ROUTES ================= */

// Auth routes
app.use("/api/auth", authRoute);

// Health check
app.get("/test", (req, res) => {
  res.status(200).json({ status: "OK", message: "Backend is running" });
});

/* ================= PROTECTED DATA ROUTES ================= */

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
