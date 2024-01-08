async function getCompanyRoles(req, res) {
  try {
    const d = req.decodedToken;
    console.log({ d });
  } catch (err) {
    res.sendStatus(500);
  }
}

module.exports = getCompanyRoles;
