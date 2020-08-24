import { Request, Response, NextFunction } from "express";

export function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  try {
    const user = "user";

    return res.json(user);
  } catch (e) {
    return next(e);
  }
}
