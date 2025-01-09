// middleware/authMiddleware.js

const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not okay" });
      } else {
        req.name = decoded.name;
        req.mobile = decoded.mobile;
        req.customer_id = decoded.customer_id; // Ensure customer_id is extracted
        next();
      }
    });
  }
};

module.exports = {
  verifyUser,
};
