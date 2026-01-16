const User = require("../model/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports.Signup = async (req, res) => {
  try {
    let { email, username, password } = req.body;
//     console.log("LOGIN EMAIL:", email);
// console.log("USER FOUND:", user);

    if (!email || !username || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Normalize
    email = email.trim().toLowerCase();
    password = password.trim();

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    await User.create({
      email,
      username,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful",
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};



module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.TOKEN_KEY,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};