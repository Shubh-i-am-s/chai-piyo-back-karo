const asyncHandler = (requestHandler) => {
  (req, res, err, next) => {
    Promise.resolve(requestHandler(req, res, err, next)).catch((err) =>
      next(err)
    );
  };
};

export default { asyncHandler };
