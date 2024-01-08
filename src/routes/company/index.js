const express = require("express");
const router = express.Router();

const requireAuth = require("../../middleware/authMiddleware");

const createCompanySpace = require("./create");

router.post("/", requireAuth, createCompanySpace);

module.exports = router;
