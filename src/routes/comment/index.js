const express = require("express");
const router = express.Router();

const requireAuth = require("../../middleware/authMiddleware");
const { addComment } = require("./comment");

router.post("/", requireAuth, addComment);

module.exports = router;
