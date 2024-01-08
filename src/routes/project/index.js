const express = require("express");
const router = express.Router();

const requireAuth = require("../../middleware/authMiddleware");

const createProject = require("./create");
const getByProjectID = require("./get");
const getAllByCompanyID = require("./getlist");

router.post("/create", requireAuth, createProject);
router.get("/:projectID", requireAuth, getByProjectID);
router.get("/byCompany/:companyID", requireAuth, getAllByCompanyID);

module.exports = router;
