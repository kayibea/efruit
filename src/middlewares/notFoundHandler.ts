import { Request, Response, NextFunction } from "express";
import HttpError from "http-errors";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const err = HttpError.NotFound("Not Found");
  next(err);
};

export default notFoundHandler;
