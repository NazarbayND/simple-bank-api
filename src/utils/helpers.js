const handleError = (error) => {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
};

const responseHandler = (res, data, message = "Success", status = 200) => {
  res.status(status).json({
    status: status === 200 ? "success" : "error",
    message,
    data,
  });
};

module.exports = {
  handleError,
  responseHandler,
};
