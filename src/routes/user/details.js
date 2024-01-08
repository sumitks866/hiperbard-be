const User = require("../../database/model/user");

async function getUserDetails(req, res) {
  try {
    const d = req.decodedToken;
    const user = await User.findOne(
      { email: d.email },
      { password: 0, _id: 0, __v: 0 }
    );
    return res.status(200).json(user);
  } catch (err) {
    res.sendStatus(500);
  }
}

module.exports = getUserDetails;
