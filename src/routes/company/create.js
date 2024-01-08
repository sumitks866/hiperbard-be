const Company = require("../../domain/company");

async function createCompanySpace(req, res) {
  const { name } = req.body;
  const { email } = req.decodedToken;
  try {
    const result = await Company.create(name, email);
    res.status(200).json(result);
  } catch (err) {
    res.sendStatus(500);
  }
}

module.exports = createCompanySpace;
