const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized: No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const userId = decoded.id || decoded._id;

    if (!userId) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized: Invalid token payload",
      });
    }

    const user = await User.findById(userId).select("username email");

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      user: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error("Verification Error:", error);
    return res.status(401).json({
      status: false,
      message: "Unauthorized: Token expired or invalid",
    });
  }
};

