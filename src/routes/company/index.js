const express = require("express");
const router = express.Router();

const requireAuth = require("../../middleware/authMiddleware");

const createCompanySpace = require("./create");
const {
  getCompanyDetailsFromId,
  getCompanyDetailByPathname,
} = require("./utils");

router.post("/", requireAuth, createCompanySpace);
router.get("/:pathname", requireAuth, getCompanyDetailByPathname);
router.get("/", requireAuth, getCompanyDetailsFromId);

module.exports = router;
