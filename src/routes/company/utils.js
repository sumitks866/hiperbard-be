const Company = require("../../domain/company/index");

async function getCompanyDetailsFromId(req, res) {
  try {
    const companyIds = req.query.id;
    const companies = await Company.getCompanyDetailsFromId(companyIds);
    res.status(200).json(companies);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ err: "Internal server error" });
  }
}

async function getCompanyDetailByPathname(req, res) {
  try {
    const { pathname } = req.params;
    const company = await Company.getCompanyDetailByPathname(pathname);
    res.status(200).json(company);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: "Internal server error" });
  }
}

module.exports = {
  getCompanyDetailsFromId,
  getCompanyDetailByPathname,
};
