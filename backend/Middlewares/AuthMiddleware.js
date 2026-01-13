const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies?.token;

    // No token
    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized: No token provided",
      });
    }

    // Verify token
    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: false,
          message: "Unauthorized: Invalid token",
        });
      }

      // Find user
      const user = await User.findById(decoded.id).select("username email");

      if (!user) {
        return res.status(404).json({
          status: false,
          message: "User not found",
        });
      }

      return res.status(200).json({
        status: true,
        user: user.username,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "Server error",
    });
  }
};
