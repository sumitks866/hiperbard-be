const User = require("../../database/model/user");
const bcrypt = require("bcrypt");

async function getUser({ email, password }) {
  try {
    const user = await User.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error("Invalid Password");
    }
    throw Error("Invalid Email");
  } catch (err) {
    throw err;
  }
}

module.exports = getUser;
