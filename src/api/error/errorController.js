import { AppError } from "./error";

const handleDulicateFields = (err) => {
  const value = err.message.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field, Please use another value`;
  return new AppError(message, 409);
};

const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid Data ${errors.join(", ")}`;
  return new AppError(message, 400);
};
const handleInvalidJwtError = (err) => {
  const message = `Invalid token. Please Login`;
  return new AppError(message, 401);
};
const handleAuthorizationError = (err) => {
  const message = `Authorization failed`;
  return new AppError(message, 401);
};
const handleAuthenticationError = (err) => {
  const message = `Authentication failed, Please check your email and password`;
  return new AppError(message, 401);
};
const handleCastError = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};
const sendErrorDev = (err, req, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
    env: `${process.env.NODE_ENV}`,
  });
};
const sendErrorProd = (err, req, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

export function errorHandler(err, req, res, next) {
  console.log(err.message);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  //
  if (process.env.NODE_ENV === "production") {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV !== "production") {
    let error = { ...err };
    error.message = err.message;
    if (error.code === 11000) error = handleDulicateFields(error);
    if (error.name === "InvalidJsonWebToken")
      error = handleInvalidJwtError(error);
    if (error.name === "CastError") error = handleCastError(error);
    if (error.name === "AuthorizationError")
      error = handleAuthorizationError(error);
    if (error.name === "AuthenticationError")
      error = handleAuthenticationError(error);
    if (error.name === "ValidationError") error = handleValidationError(error);

    sendErrorProd(error, req, res);
  }
}
