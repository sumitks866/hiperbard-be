const jwt = require("jsonwebtoken");
const config = require("../../config");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, config.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: err.message });
      } else {
        console.log({ decodedToken });
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(403).json({ error: "Forbidden: token not present" });
  }
};

module.exports = requireAuth;
