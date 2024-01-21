const createCompany = require("../../domain/utils/createCompany");

async function createCompanySpace(req, res) {
  const { name, invitees, pathname } = req.body;
  const { email } = req.decodedToken;
  // console.log({ invitees, name, pathname });
  try {
    const result = await createCompany(name, pathname, email);
    res.status(200).json(result);
  } catch (err) {
    console.log({ err });
    res.sendStatus(500);
  }
}

module.exports = createCompanySpace;
