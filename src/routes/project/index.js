const express = require("express");
const router = express.Router();

const requireAuth = require("../../middleware/authMiddleware");

const createProject = require("./create");
const getByProjectCode = require("./get");
const {
  getProjectsByCompany,
  getProjectsByQuery,
  getProjectsByCompanyPathname,
} = require("./getlist");

router.post("/create", requireAuth, createProject);

router.get("/:projectID", requireAuth, getByProjectCode);

router.get(
  "/pathname/:companyPathname",
  requireAuth,
  getProjectsByCompanyPathname
);

router.get("/byCompany/:companyID", requireAuth, getProjectsByCompany);

router.get("/", requireAuth, getProjectsByQuery);

module.exports = router;
