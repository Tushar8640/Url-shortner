const config = require("../../../config");
const { ApiError } = require("../../../handleErros/apiError");
const { jwtHelpers } = require("../../../helpers/jwtHelpers");
const User = require("../user/user.model");
const bcrypt = require('bcrypt');

const login = async (data) => {

  const {email, password} = data;
  //creating insatnce method
  
  const isUserExist = await User.findOne({email});

  if (!isUserExist) {
    throw new ApiError(404, "User doesn't found");
  }

  if (
    isUserExist.password &&
    !(await bcrypt.compare(password, isUserExist.password))
  ) {
    throw new ApiError(401, 'Password is incorrect');
  }
//
  // const isPasswordMatched = await user.isPasswordMatched(password, isUserExist.password);
  // if (isUserExist.password && !isPasswordMatched) {
  //   throw new ApiError(httpStatus.UNAUTHORIZED, "password is incorrect");
  // }
  //create accesstoken & refresh token
  const {_id: userId, email: userEmail} = isUserExist;

  const accessToken = jwtHelpers.createToken(
    { userId,userEmail },
    config.jwt.secret ,
    config.jwt.expires_in
  );
  const refreshToken = jwtHelpers.createToken(
    { userId, userEmail },
    config.jwt.refresh_secret,
    config.jwt.refresh_expires_in 
  );

  return {
    accessToken,
    refreshToken,
  };
};

exports.authServices = {
  login,
};
