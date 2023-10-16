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

// const redirectUrl = async (req, res) => {
//   try {
//     const { shortUrl } = req.params;

//     const url = await urlServices.redirectUrl(shortUrl);

//     if (!url) {
//       return res.status(404).json({ error: "Short URL not found" });
//     }

//     res.redirect(url.originalUrl);
//   } catch (err) {
//     console.error("Error retrieving a shortened URL:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

exports.userController = {
  createUser,
};
