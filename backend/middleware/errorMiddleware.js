const notFound = (req, res, nex) => {
  const error = new Error(`Not Found - ${req.orginalURL}`);
  res.ststus(404);
  nextTick(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  //check for Mongoose bad ObjectId
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = `Resource not found`;
    statusCode = 404;
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "0" : err.stack,
  });
};

export { notFound, errorHandler };
