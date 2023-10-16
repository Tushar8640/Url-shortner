const { hashPasswordHook } = require("../auth/auth.utils");
const User = require("./user.model");

const createUser = async (payload) => {
  const { password, email} = payload;

  const ifUserExists = await User.findOne({ email });

  if (ifUserExists) {
    throw new ApiError(400, "User already exists");
  }

  const newUser = new User(payload);

  newUser.password = await hashPasswordHook(password);

  const createdUser = await newUser.save();

  return createdUser;
};

exports.userServices = {
  createUser,
};
