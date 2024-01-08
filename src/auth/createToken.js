const jwt = require("jsonwebtoken");
const config = require("../../config");

const jwtSecret = config.JWT_SECRET;

const maxAge = 5 * 60 * 60; // 5 hrs

const createToken = (data) => {
  return jwt.sign(data, jwtSecret, { expiresIn: maxAge });
};

module.exports = createToken;
