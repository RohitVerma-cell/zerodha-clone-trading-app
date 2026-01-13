const express = require("express");
const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");

const router = express.Router();

// Register user
router.post("/signup", Signup);

// Login user
router.post("/login", Login);

// Verify logged-in user (JWT)
router.get("/verify", userVerification);

module.exports = router;

