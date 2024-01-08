const verifyToken = require("../../auth/verifyToken");

async function verfiyUserJWTToken(req, res) {
  const authHeader = req.headers["authorization"];
  const token = (authHeader && authHeader.split(" ")[1]) || req.cookies.jwt;
  if (token) {
    try {
      const result = await verifyToken(token);
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ error: "Token verification failed" });
    }
  } else {
    res.status(403).json({ error: "Forbidden: token not present" });
  }
}

module.exports = verfiyUserJWTToken;
