const createToken = require("../../auth/createToken");
const User = require("../../domain/user");

async function createUser(req, res) {
  const { name, email, password } = req.body;
  try {
    const result = await User.create({ name, email, password });
    const token = createToken({
      username: result.username,
      email: result.email,
      name: result.name,
    });
    res.cookie("jwt", token, { httpOnly: true, maxAge: 5 * 60 * 60 * 1000 });
    res.status(201).json({
      username: result.username,
      email: result.email,
      name: result.name,
    });
  } catch (err) {
    console.log();
    res.sendStatus(400);
  }
}

module.exports = createUser;
