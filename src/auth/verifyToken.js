const jwt = require("jsonwebtoken");
const config = require("../../config");

async function verifyToken(token) {
  try {
    const decodedToken = await jwt.verify(token, config.JWT_SECRET);
    return decodedToken;
  } catch (err) {
    throw new Error("Token verification failed");
  }
}

module.exports = verifyToken;
