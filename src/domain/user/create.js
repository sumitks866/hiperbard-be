const User = require("../../database/model/user");

async function createUser({ name, email, password }) {
  try {
    const newUser = new User({
      name,
      email,
      password,
    });
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = createUser;
