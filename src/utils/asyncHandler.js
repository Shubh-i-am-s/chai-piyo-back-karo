const asyncHandler = (requestHandler) => (req, res, next) => {
  return Promise.resolve(requestHandler(req, res, next)).catch((error) => {
    return next(error); //next(err) passes the control to express error handling code in our case apierror
  });
};
export default asyncHandler;
