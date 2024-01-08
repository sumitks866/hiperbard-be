const express = require("express");
const router = express.Router();

const createUser = require("./create");
const getUser = require("./get");
const verifyUser = require("./verify");
const getCompanies = require("./getCompanies");
const requireAuth = require("../../middleware/authMiddleware");
const getUserDetails = require("./details");

router.post("/create", createUser);
router.post("/", getUser);
router.get("/", requireAuth, getUserDetails);
router.get("/verify", verifyUser);
router.get("/companies", requireAuth, getCompanies);

module.exports = router;
