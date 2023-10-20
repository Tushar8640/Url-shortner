const { catchAsync } = require("../../../shared/catchAsync");
const { sendResponse } = require("../../../shared/sendResponse");
const { userServices } = require("./user.service");

const createUser = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await userServices.createUser(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User created successfully!!",
    data: result,
  });
});



exports.userController = {
  createUser,
};
