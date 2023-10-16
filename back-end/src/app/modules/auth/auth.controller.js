const { catchAsync } = require("../../../shared/catchAsync");
const { sendResponse } = require("../../../shared/sendResponse");
const { authServices } = require("./auth.service");

const login = catchAsync(async (req, res) => {
  const data = req?.body;
  const result = await authServices.login(data);
  const { refreshToken, ...others } = result;

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully!!",
    data: others,
  });
});

exports.authController = {
  login,
};
