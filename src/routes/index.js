const express = require("express");
const router = express.Router();

const user = require("./user");
const project = require("./project");
const company = require("./company");
const task = require("./task");
const comment = require("./comment");

router.use("/user", user);
router.use("/project", project);
router.use("/company", company);
router.use("/task", task);
router.use("/comment", comment);

module.exports = router;
