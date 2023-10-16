const ApiError = require("../../handleErros/apiError");
const handleDuplicateKeyError = require("../../handleErros/handleDuplicationKeyError");
const handleCastError = require("../../handleErros/handleCastError");

exports.globalErrorHandler = (error, req, res, next) => {
  let statusCode = 400;
  let message = "Something went wrong";
  let errorMessages = [];

  if (error?.code === 11000) {
    const simplifiedError = handleDuplicateKeyError();
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } //
  else if (error?.name === "CastError") {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } //
  else if (error && error.type === 'ApiError') {
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = error.message
      ? [{ path: "", message: error.message }]
      : [];
  } else if (error && error instanceof Error) {
    message = error.message;
    errorMessages = error.message
      ? [{ path: "", message: error.message }]
      : [];
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
  });
};
