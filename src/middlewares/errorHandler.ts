import { ErrorRequestHandler } from "express";
import { ApiError } from "../errors/ApiError";

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  req,
  res,
  next,
) => {
  if (!error) {
    next();
  } else if (error instanceof ApiError) {
    res.status(error.status).send(error.message);
  } else {
    console.log(error);
    res.sendStatus(500);
  }
};
