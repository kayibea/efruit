import HttpError from "http-errors";
import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (HttpError.isHttpError(err)) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 500,
    message: "Internal Server Error",
  });
};

export default errorHandler;
