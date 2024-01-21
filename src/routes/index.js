const express = require("express");
const router = express.Router();

const user = require("./user");
const project = require("./project");
const company = require("./company");
const task = require("./task");

router.use("/user", user);
router.use("/project", project);
router.use("/company", company);
router.use("/task", task);

module.exports = router;
