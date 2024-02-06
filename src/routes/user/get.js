const User = require("../../domain/user");
const createToken = require("../../auth/createToken");
const { sendMail } = require("../../utils/mailer");

async function getUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.get({ email, password });
    const token = createToken({
      username: user.username,
      email: user.email,
      name: user.name,
    });
    res.cookie("jwt", token, { httpOnly: true, maxAge: 5 * 60 * 60 * 1000 });

    // const info = await sendMail(
    //   "sumitks866@gmail.com",
    //   "Your recent login",
    //   "<p>You recently tried to login</p>"
    // );
    // console.log({ info });

    res.status(200).json({
      username: user.username,
      email: user.email,
      name: user.name,
    });
  } catch (err) {
    console.log({ err });
    res.status(400).json({ err: err.toString() });
  }
}

module.exports = getUser;
